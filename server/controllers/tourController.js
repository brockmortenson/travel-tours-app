module.exports = {
    getAllTours: async (req, res) => {
        const allTours = await req.app.get('db').get_all_tours();
        return res.status(200).send(allTours);
    },
    bookTour: async (req, res) => {
        console.log(req.body)
        const addedTours = await req.app.get('db').add_cart_item_to_cart(cart_id, tour_id);
        return res.status (200).send(addedTours);
    },
    // remove
}

// comment