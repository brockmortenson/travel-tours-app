module.exports = {
    getCart: async (req, res) => {
        const myCart = await req.app.get('db').get_cart([req.session.user]); // should I be passing in req.session.user? Error says column user_id does not exist
        return res.status(200).send(myCart);
    }
}