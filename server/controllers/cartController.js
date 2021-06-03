module.exports = {
    getCart: async (req, res) => {
        // console.log('hit getcart')
        const db = req.app.get('db');
        const existingUser = req.session.user;

        const [ cart ] = await db.get_cart_id(existingUser.user_id);

        existingUser.cartID = cart.cart_id;

        const myCart = await req.app.get('db').get_cart([existingUser.user_id, existingUser.cartID]);
        // console.log(myCart)

        return res.status(200).send(myCart);
    },
    updateTour: async (req, res) => {
        const db = req.app.get('db');
        const { tour_id } = req.body;
        const { cartID } = req.session.user;
        
        const updatedTour = await req.app.get('db').add_cart_item_to_cart(cartID, tour_id);

        return res.status(200).send(updatedTour);
    },
    removeTour: async (req, res) => {
        const db = req.app.get('db');

        
    }
}