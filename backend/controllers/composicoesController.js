const Composicoes = require('../models/ComposicoesModel');

module.exports = {

    //metodo de pesquisa codigo ou descrição
    async search(req, res,) {
        try {
            const { input, page } = req.query;

            const regex = new RegExp(input, 'i');
            const limit = 20;
            let skip = limit * (page - 1);

            const composicao = await Composicoes
                .find(
                    {
                        $or: [
                            { DESCRICAO_DA_COMPOSICAO: regex },
                            { CODIGO_DA_COMPOSICAO: regex }
                        ]
                    },
                )
                .skip(skip)
                .limit(limit)
                .sort({ _id: 1 });

            if (composicao) {
                return res.status(200).json(composicao);
            } else {
                return res.send({
                    message: 'neum registro encontrado',
                })
            }
        } catch (err) {

        }
    },

    //metodo para cadastrar
    async store(req, res) {
        try {
            const { CODIGO_DA_COMPOSICAO, DESCRICAO_DA_COMPOSICAO } = req.body;

            if (!CODIGO_DA_COMPOSICAO || !DESCRICAO_DA_COMPOSICAO) {
                return res.send(
                    alert(`Os campos não podem estar vazios!`)
                );
            };

            composicao = await Composicoes.create(req.body);
            return res.status(200).send({
                messsage: "Composição criada com sucesso",
                composicao
            });

        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao cadastrar a composição: ${error}`
            });
        };
    },

    //metodo para excluir Insumo
    async delete(req, res) {
        const composicao = await Composicoes.findByIdAndDelete(req.params.id)

        if (!composicao) {
            return res.status(404).send({
                messsage: `id do insumo não encontrado ${req.params.id}`
            });
        }
        return res.status(200).send({
            messsage: "Insumo excluido com sucesso",
            composicao
        })
    },

    //metodo para atualizar
    async update(req, res) {
        try {

            if (typeof req.body.precoMed == 'string') {

                const regex = /[^\d\.]/g;

                const precoSanitizado = req.body.precoMed.replace(regex, "").trim();

                req.body['precoMed'] = precoSanitizado;
            }

            const composicao = await Composicoes.findByIdAndUpdate(req.params.id, req.body)

            if (!composicao) {
                return res.status(401).send({
                    messsage: 'Insumo não encontrado',
                    composicao
                })
            }
            return res.status(200).send({
                messsage: 'Insumo atualizado com sucesso',
            })
        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao atualizar: ${error}`
            })
        }
    }
}