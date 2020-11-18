const knex = require('../index');

module.exports = {

    //metodo para listar todos
    async index(req, res) {
        const users = await knex('users')
            .where('deleted_at', null);


        return res.status(200).json(users);
    },

    async create(req, res) {
        try {
            const { username } = req.body;

            await knex('users').insert({
                username
            });

            return res.status(200).send();
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    },

    async update(req, res) {
        try {

            const { username } = req.body;
            const { id } = req.params;

            await knex('users').update({ username })
                .where({ id });

            return res.status(200).send();
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            await knex('users')
                .where({ id })
                .update('deleted_at', knex.fn.now());
            //.del();//softdelete

            return res.send();
        } catch (error) {
            return res.status(400).send({ message: error });
        }
    }
}