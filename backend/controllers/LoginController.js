const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

module.exports = {
    async store(req, res) {
        try {
            const { login } = req.body;

            const user = await User.findOne({ login });

            if (!user) {
                user = await User.create(req.body);
                return res.send({
                    user,
                    token: generateToken({ id: user._id }),
                });
            }
        } catch (error) {
            return res.status(400).send({ error: 'O Registro falhou' })
        }
    },

    async logar(req, res) {
        try {
            const { login, senha } = req.body;

            const user = await User.findOne({ login });

            if (!user) {
                return res.status(400).send({
                    messsage: `Usuario não cadastrado ${user.login}`
                });
            }
            if (!await bcrypt.compare(senha, user.senha)) {
                return res.status(400).send({
                    messsage: `senha incorreta para ${user.login}`
                });
            }

            user.senha = undefined;

            return res.status(200).send({
                user,
                token: generateToken({ id: user._id })
            });
        } catch (error) {
            return res.status(404).send(`result:${error}`)
        }
    }
};