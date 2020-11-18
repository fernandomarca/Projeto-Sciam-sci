import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../../../services/api';
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

    //Filtra por bairro escolhido array do bairrosReduce ["Centro","Cancelli"]
    const quantAptosBairro = []
    for (const key in bairrosReduce) {
        const filterBairro = dataApi.filter((ap) => ap.bairro.includes(bairrosReduce[key]))
        //console.log(`A quantidade de Apartamentos no bairro:${bairrosReduce[key]} é:${filterBairro.length}`)
        quantAptosBairro.push((filterBairro.length))
    }

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

export default ChartBar1