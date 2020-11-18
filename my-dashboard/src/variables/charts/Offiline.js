const resultSanitized = require('../resultSanitized/resultSanitized');
const api = require('../../services/api');

//reduce para extrair somente os bairros não repetidos
const bairrosReduce = resultSanitized.reduce((acc, ap) => {
    if (!acc.includes(ap.bairro)) {
        acc.push(ap.bairro);
    }
    return acc;
}, []).sort()
//console.log(bairrosReduce)

//Filtra por bairro escolhido array do bairrosReduce ["Centro","Cancelli"]
const quantAptosBairro = []
for (const key in bairrosReduce) {
    const filterBairro = resultSanitized.filter((ap) => ap.bairro.includes(bairrosReduce[key]))
    //console.log(`A quantidade de Apartamentos no bairro:${bairrosReduce[key]} é:${filterBairro.length}`)
    quantAptosBairro.push(filterBairro.length)
}

//gráfico distribuição de apartamentos por bairro
const barData = {
    labels: [...bairrosReduce],
    datasets: [
        {
            label: 'Unidades por Bairro',
            backgroundColor: 'rgb(34, 0, 255,0.2)',
            borderColor: 'rgb(34, 0, 255)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(34, 0, 255,0.4)',
            hoverBorderColor: 'rgb(34, 0, 255)',
            data: [...quantAptosBairro]
        }
    ]
};


//gráfico tamanho médio de área por bairro
//somar as áreas por bairro e dividi pela quantidade de apartamentos
//Soma das áreas por bairro
const mediaAreaBairro = []

bairrosReduce.map((bairro, index) => {
    const apto = resultSanitized.filter((ap) => ap.bairro.includes(bairrosReduce[index]))
    let somaArea = apto.reduce((acc, apto, index) => {
        acc = (acc + apto.areaUtil);
        //console.log(index)
        return acc
    }, 0)
    return mediaAreaBairro.push((somaArea / apto.length).toFixed(2))
})
//console.log(mediaAreaBairro)

const barData2 = {
    labels: [...bairrosReduce],
    datasets: [
        {
            label: 'Tamanho médio por Bairro',
            backgroundColor: 'rgb(7, 155, 15,0.2)',
            borderColor: 'rgb(7, 155, 15)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(7, 155, 15,0.4)',
            hoverBorderColor: 'rgb(7, 155, 15)',
            data: [...mediaAreaBairro]
        }
    ]
};

//gráfico valor médio do m2 por bairro
//valor médio do m2 por bairro: soma(preco/area)/qtdaAptos
const valorM2Bairro = []
bairrosReduce.map((bairro, index) => {
    const apto = resultSanitized.filter((ap) => ap.bairro.includes(bairrosReduce[index]))
    let custoM2 = apto.reduce((acc, apto, index) => {
        acc = acc + (apto.preco / apto.areaUtil);
        //console.log(index)
        return acc
    }, 0)
    return valorM2Bairro.push((custoM2 / apto.length).toFixed(2))
})
//console.log(valorM2Bairro)

const barData3 = {
    labels: [...bairrosReduce],
    datasets: [
        {
            label: 'Valor do m² por Bairro',
            backgroundColor: 'rgb(196, 3, 3,0.2)',
            borderColor: 'rgb(196, 3, 3)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(196, 3, 3,0.4)',
            hoverBorderColor: 'rgb(196, 3, 3)',
            data: [...valorM2Bairro]
        }
    ]
};

module.exports = { barData, barData2, barData3 };