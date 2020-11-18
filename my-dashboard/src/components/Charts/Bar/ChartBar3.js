import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../../services/api'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const ChartBar3 = () => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        const response = await api.get('/imovel');
        setDataApi(response.data)
    };

    //reduce para extrair somente os bairros não repetidos
    const bairrosReduce = dataApi.reduce((acc, ap) => {
        if (!acc.includes(ap.bairro)) {
            acc.push(ap.bairro);
        }
        return acc;
    }, []).sort()

    //Filtra por bairro escolhido array do bairrosReduce ["Centro","Cancelli"]
    const quantAptosBairro = []
    for (const key in bairrosReduce) {
        const filterBairro = dataApi.filter((ap) => ap.bairro.includes(bairrosReduce[key]))
        //console.log(`A quantidade de Apartamentos no bairro:${bairrosReduce[key]} é:${filterBairro.length}`)
        quantAptosBairro.push(filterBairro.length)
    }

    //gráfico tamanho médio de área por bairro
    //somar as áreas por bairro e dividi pela quantidade de apartamentos
    //Soma das áreas por bairro
    const mediaAreaBairro = []
    bairrosReduce.map((bairro, index) => {
        const apto = dataApi.filter((ap) => ap.bairro.includes(bairrosReduce[index]))
        let somaArea = apto.reduce((acc, apto, index) => {
            acc = (acc + apto.areaUtil);
            //console.log(index)
            return acc
        }, 0)
        return mediaAreaBairro.push((somaArea / apto.length).toFixed(1))
    }).sort()

    //console.log(mediaAreaBairro)

    const barData = {
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

    return (
        <div>
            <Bar
                data={barData}
                width={100}
                height={70}
                options={{
                    plugins: {
                        datalabels: {
                            color: 'black',
                            anchor: 'end',
                            align: 'end',
                            labels: {
                                title: {
                                    font: {
                                        weight: 'normal'
                                    }
                                },
                                value: {
                                    color: 'black'
                                }
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}

export default ChartBar3