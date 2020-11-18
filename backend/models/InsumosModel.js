const mongoose = require('mongoose');

const InsumoSchema = new mongoose.Schema({
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
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
        collection: 'Insumos',
    });


module.exports = mongoose.model('Insumos', InsumoSchema);
