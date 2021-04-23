const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { userEmail: email, userPassword: password } = req.body;
        // console.log(email, password)
        const [ existingUser ] = await db.check_existing_user(email);

        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [ newUser ] = await db.register_user(email, hash);
        const [ cart ] = await db.create_cart(newUser.user_id);

        delete newUser.hash;

        newUser.cart = cart.cart_id;
        console.log(newUser)

        req.session.user = newUser;

        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const { userEmail: email, userPassword: password } = req.body;

        const [ existingUser ] = await db.check_existing_user(email);

        if (!existingUser) {
            return res.status(404).send('User does not exist');
        }

        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash);

        if (!isAuthenticated) {
            return res.status(403).send('Incorrect email and/or password');
        }

        const [ cart ] = await db.get_cart_id(existingUser.user_id);
        console.log(cart)
        existingUser.cartID = cart.cart_id;

        delete existingUser.hash;

        req.session.user = existingUser;

        res.status(200).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getSession: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.sendStatus(403);
        }
    }
}