const mongoose = require('mongoose');

const InsumosProprios = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    descricaoInsumo: {
        type: String,
        required: true,
    },
    unidade: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
    },
    origemPreco: {
        type: String,
    },
    precoMed: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
        collection: 'InsumosProprios',
    });


module.exports = mongoose.model('InsumosProprios', InsumosProprios);
