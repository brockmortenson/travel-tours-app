module.exports = {
    getCart: async (req, res) => {
        console.log('hit getcart')
        const db = req.app.get('db');
        const existingUser = req.session.user;

        const [ cart ] = await db.get_cart_id(existingUser.user_id);
        // says user_id is undefined

        existingUser.cartID = cart.cart_id;

        const myCart = await req.app.get('db').get_cart([existingUser.user_id, existingUser.cartID]); // should I be passing in req.session.user? 
        console.log(myCart)
        return res.status(200).send(myCart);
    },
    updateTour: async (req, res) => {
        const updatedTour = await req.app.get('db').change_tier();
        return res.status(200).send(updatedTour);
    },
    // removeTour
}