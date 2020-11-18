const Imovel = require('../models/Imovel');

module.exports = {

    //metodo para listar todos
    async index(request, response) {
        const imoveis = await Imovel.find({});
        return response.status(200).json(imoveis);
    },
    //metodo para cadastrar
    async store(req, res) {
        try {
            const { codigo, nome, preco, areaUtil } = req.body;

            if (!nome || !preco || !areaUtil) {
                return res.send({
                    messsage: `Os campos não podem estar vazios:\n
                Nome,Preço,Área útil, bairro,cidade,categoria e tipo
                `
                })
            }

            let imovel = await Imovel.findOne({ codigo });

            if (!imovel || codigo === undefined) {
                imovel = await Imovel.create(req.body);
                return res.status(200).send({
                    messsage: "Imovel criado com sucesso",
                    imovel
                })
            } else {
                return res.json(`Imovél: ${imovel.codigo} já existe`)
            }
        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao cadastrar: ${error}`
            })
        }
    },

    //metodo para excluir imovél
    async delete(req, res) {
        const imovel = await Imovel.findByIdAndDelete(req.params.id)

        if (!imovel) {
            return res.status(404).send({
                messsage: `id do imovel não encontrado ${req.params.id}`
            });
        }
        return res.status(200).send({
            messsage: "Imovél excluido com sucesso",
            imovel
        })
    },

    //metodo para atualizar
    async update(req, res) {
        try {
            const regex = /\D+/g;

            const precoSanitizado = req.body.preco.replace(regex, "").trim();

            req.body['preco'] = Number(precoSanitizado);

            const imovel = await Imovel.findByIdAndUpdate(req.params.id, req.body)

            if (!imovel) {
                return res.status(401).send({
                    messsage: 'Imovél não encontrado',
                    imovel
                })
            }
            return res.status(200).send({
                messsage: 'Imovél atualizado com sucesso',
            })
        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao atualizar: ${error}`
            })
        }
    }
}