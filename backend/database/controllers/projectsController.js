const knex = require('../index');

module.exports = {

    //metodo para listar todos
    async index(req, res) {
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('projects')
                .limit(5)
                .offset((page - 1) * 5);

            const countObj = knex('projects').count();

            //console.log(count);

            if (user_id) {
                query.where({ user_id })
                    //query.where('user_id',user_id);
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects.*', 'users.username')
                    .where('users.deleted_at', null)
                //softdelete
                countObj
                    .where({ user_id });
            }

            const [count] = await countObj;

            res.header('X-Total-Count', count["count(*)"]);

            const results = await query;

            return res.status(200).json(results);

        } catch (error) {
            return res.status(400).send({
                message: error
            })
        }
    },

    async create(req, res) {
        try {

            const { title, user_id } = req.body;

            await knex('projects').insert({
                title,
                user_id
            })

            return res.send();

        } catch (error) {
            return res.status(400).send({
                message: error
            });
        }
    }
}