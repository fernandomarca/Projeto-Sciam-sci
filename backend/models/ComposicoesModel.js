const mongoose = require('mongoose');

const ComposicoesSchema = new mongoose.Schema({
    DESCRICAO_DA_CLASSE: {
        type: String,
    },
    SIGLA_DA_CLASSE: {
        type: String,
    },
    DESCRICAO_DO_TIPO_1: {
        type: String,
    },
    SIGLA_DO_TIPO_1:
    {
        type: String,
    },
    CODIGO_DA_COMPOSICAO: {
        type: String,
    },
    DESCRICAO_DA_COMPOSICAO: {
        type: String,
    },
    UNIDADE: {
        type: String,
    },
    CUSTO_TOTAL: {
        type: String,
    },
    CUSTO_MAO_DE_OBRA: {
        type: String,
    },
    PER_MAO_DE_OBRA: {
        type: String,
    },
    CUSTO_MATERIAL: {
        type: String,
    },
    PER_MATERIAL: {
        type: String,
    },
    CUSTO_EQUIPAMENTO: {
        type: String,
    },
    PER_EQUIPAMENTO: {
        type: String,
    },
    CUSTO_SERVICOS_TERCEIROS: {
        type: String,
    },
    PER_SERVICOS_TERCEIROS: {
        type: String,
    },
    CUSTO_OUTROS: {
        type: String,
    },
    PER_OUTROS: {
        type: String,
    },
    TIPO_ITEM: {
        type: String,
    },
    CODIGO_ITEM: {
        type: String,
    },
    DESCRIÇÃO_ITEM: {
        type: String,
    },
    UNIDADE_ITEM:
    {
        type: String,
    },
    COEFICIENTE: {
        type: String,
    },
    PRECO_UNITARIO: {
        type: String,
    },
},
    {
        timestamps: true,
        collection: 'Composicoes',
    });


module.exports = mongoose.model('Composicoes', ComposicoesSchema);
