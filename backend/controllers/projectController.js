
module.exports = {
    async securit(req, res) {
        res.send({ ok: true, user: req.userId });
    }

};