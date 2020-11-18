const InsumosProprio = require('../models/InsumosModelProprio');

module.exports = {

    //metodo de pesquisa codigo ou descrição
    async search(req, res,) {
        try {
            const { input, page } = req.query;

            const regex = new RegExp(input, 'i');
            const limit = 20;
            let skip = limit * (page - 1);

            const insumos = await InsumosProprio
                .find(
                    {
                        $or: [
                            { descricaoInsumo: regex },
                            { codigo: regex }
                        ]
                    },
                )
                .skip(skip)
                .limit(limit)
                .sort({ descricaoInsumo: 1 });

            if (insumos) {

                /*
                const regex = /\D+/g;
                const insumosNumber = insumos.filter((item) => {
                    const precoSanitizado = item.precoMed.replace(regex, ".").trim()
                    item['precoMed'] = Number(precoSanitizado);
                    return true;
                })
                */

                return res.status(200).json(insumos);
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
            const { codigo, descricaoInsumo, unidade, precoMed } = req.body;

            if (!codigo || !descricaoInsumo || !unidade || !precoMed) {
                return res.send(
                    alert(`Os campos não podem estar vazios:
                    Código, Descrição,Unidade,Preço,
                    `)
                );
            };

            let insumo = await InsumosProprio.findOne({ codigo });

            if (!insumo || codigo === undefined) {

                const regex = /\D+/g;

                const precoSanitizado = req.body.precoMed.replace(regex, "").trim();

                req.body['precoMed'] = Number(precoSanitizado);

                insumo = await InsumosProprio.create(req.body);
                return res.status(200).send({
                    messsage: "Insumo criado com sucesso",
                    insumo
                });
            } else {
                return res.json(`Insumo: ${insumo.codigo} já existe`)
            };
        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao cadastrar o insumo: ${error}`
            });
        };
    },

    //metodo para excluir Insumo
    async delete(req, res) {
        const insumo = await InsumosProprio.findByIdAndDelete(req.params.id)

        if (!insumo) {
            return res.status(404).send({
                messsage: `id do insumo não encontrado ${req.params.id}`
            });
        }
        return res.status(200).send({
            messsage: "Insumo excluido com sucesso",
            insumo
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

            const insumo = await InsumosProprio.findByIdAndUpdate(req.params.id, req.body)

            if (!insumo) {
                return res.status(401).send({
                    messsage: 'Insumo não encontrado',
                    insumo
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