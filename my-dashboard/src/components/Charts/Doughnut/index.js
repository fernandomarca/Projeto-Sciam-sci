import React, { useState, useEffect } from 'react';
import api from '../../../services/api'
import { Doughnut } from 'react-chartjs-2';

const ChartDoughnut = () => {

	const [dataApi, setDataApi] = useState([]);

	useEffect(() => {
		load();
	}, []);

	async function load() {
		const response = await api.get('/imovel');
		setDataApi(response.data)
	};
	const data = {
		labels: [
			'Unidades no Banco de Dados',
		],
		datasets: [{
			data: [dataApi.length],
			backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			],
			hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56'
			]
		}]
	};


	return (
		<div>
			<h2></h2>
			<Doughnut data={data}
				width={100}
				height={40}
				options={{
					plugins: {
						datalabels: {
							color: 'black',
							anchor: 'center',
							align: 'center',
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
					}
				}}

			/>
		</div >
	);
}

export default ChartDoughnut