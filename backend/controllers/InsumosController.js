/**
 * Base de insumos da SINAPI
 */

const Insumos = require('../models/InsumosModel');

module.exports = {

    //metodo de pesquisa codigo ou descrição
    async search(req, res,) {
        try {
            const { input, page } = req.query;

            const regex = new RegExp(input, 'i');
            const limit = 20;
            let skip = limit * (page - 1);

            const insumos = await Insumos
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

                const regex = /[^\d\,]/g;
                const insumosNumber = insumos.filter((item) => {
                    const precoVirgula = item.precoMed.replace(regex, "").trim();
                    const precoSanitizado = precoVirgula.replace(',', '.');
                    item['precoMed'] = Number(precoSanitizado);
                    return true;
                })

                return res.status(200).json(insumosNumber);
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

            if (!descricaoInsumo || !unidade || !precoMed) {
                return res.send({
                    messsage: `Os campos não podem estar vazios:\n
                Descrição do Insumo, Unidade e Preço
                `
                })
            }

            let insumo = await Insumos.findOne({ codigo });

            if (!insumo || codigo === undefined) {
                insumo = await Insumos.create(req.body);
                return res.status(200).send({
                    messsage: "Insumo criado com sucesso",
                    insumo
                })
            } else {
                return res.json(`Insumo: ${insumo.codigo} já existe`)
            }
        } catch (error) {
            return res.status(400).send({
                messsage: `Erro ao cadastrar o insumo: ${error}`
            })
        }
    },

    //metodo para excluir Insumo
    async delete(req, res) {
        const insumo = await Insumos.findByIdAndDelete(req.params.id)

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
            const regex = /\D+/g;

            const precoSanitizado = req.body.preco.replace(regex, "").trim();

            req.body['preco'] = Number(precoSanitizado);

            const insumo = await Insumos.findByIdAndUpdate(req.params.id, req.body)

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