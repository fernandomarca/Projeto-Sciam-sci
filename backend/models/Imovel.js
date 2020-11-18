const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    data: {
        type: String,
    },
    codigo: {
        type: String,
    },
    preco: {
        type: Number,
        required: true,
    },
    condominio: {
        type: String,
    },
    descricao: {
        type: String,
    },
    categoria: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    areaUtil: {
        type: Number,
        required: true,
    },
    quartos: {
        type: String,
    },
    banheiros: {
        type: String,
    },
    vagasGaragem: {
        type: String,
    },
    detalhesImovel: {
        type: String,
    },
    detalhesCondominio: {
        type: String,
    },
    cep: {
        type: String,
    },
    municipio: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
    },
    link: {
        type: String,
    },
},
    {
        timestamps: true,
        collection: 'Imoveis',
    });

module.exports = mongoose.model('Imovel', UserSchema);
