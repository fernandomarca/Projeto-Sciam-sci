import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../../services/api'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const ChartBar1 = () => {
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

    //gráfico valor médio do m2 por bairro
    //valor médio do m2 por bairro: soma(preco/area)/qtdaAptos
    const valorM2Bairro = []
    bairrosReduce.map((bairro, index) => {
        const apto = dataApi.filter((ap) => ap.bairro.includes(bairrosReduce[index]))
        let custoM2 = apto.reduce((acc, apto, index) => {
            acc = acc + (apto.preco / apto.areaUtil);
            //console.log(index)
            return acc
        }, 0)
        return valorM2Bairro.push((custoM2 / apto.length).toFixed(0))
    })
    //console.log(valorM2Bairro)

    const barData = {
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
                            rotation: 0,
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

export default ChartBar1