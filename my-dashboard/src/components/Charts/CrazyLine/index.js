import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import color from 'rcolor';

const initialState = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};



const Graph = () => {


	const [state, setState] = useState(initialState)

	setInterval(function () {
		var oldDataSet = state.datasets[0];
		var newData = [];

		for (var x = 0; x < state.labels.length; x++) {
			newData.push(Math.floor(Math.random() * 100));
		}

		var newDataSet = {
			...oldDataSet
		};

		newDataSet.data = newData;
		newDataSet.backgroundColor = color();
		newDataSet.borderColor = color();
		newDataSet.hoverBackgroundColor = color();
		newDataSet.hoverBorderColor = color();

		var newState = {
			...initialState,
			datasets: [newDataSet]
		};

		setState(newState);
	}, 5000);

	return (
		<Bar data={state} />
	);
}


const ChartCrazyLine = () => {

	return (
		<div>
			<h2></h2>
			<Graph />
		</div>
	);

}

export default ChartCrazyLine