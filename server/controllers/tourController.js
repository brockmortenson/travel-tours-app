module.exports = {
    getAllTours: async (req, res) => {
        const allTours = await req.app.get('db').get_all_tours();
        return res.status(200).send(allTours);
    },
    bookTour: async (req, res) => {
        // console.log(req.body)

        const db = req.app.get('db');
        const { tour_id } = req.body;
        const { cartID } = req.session.user;
        
        // console.log(req.session.user.cart)
        // console.log(tour_id)

        const addedTours = await req.app.get('db').add_cart_item_to_cart(cartID, tour_id);
        return res.status (200).send(addedTours);
    }
}
