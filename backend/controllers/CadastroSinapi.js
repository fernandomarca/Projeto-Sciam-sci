const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

const resultado = require('../models/insumosSinapi/InsumoNaoDesonerado2');

async function handleAdd(newData) {
    try {
        await api.post('/insumos', newData)

    } catch (err) {
        console.log('erro ao Cadastrar:' + err)
    }
}

(async function () {
    for (const key in resultado) {
        //console.log(resultado)
        try {
            if (resultado.hasOwnProperty(key)) {
                const element = resultado[key];
                handleAdd(element)
            }
        } catch (error) {
            console.log('erro funcao main:' + error)
        }
    }
}());