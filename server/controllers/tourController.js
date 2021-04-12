module.exports = {
    getAllTours: async (req, res) => {
        const allTours = await req.app.get('db').get_all_tours();
        return res.status(200).send(allTours);
    }
}