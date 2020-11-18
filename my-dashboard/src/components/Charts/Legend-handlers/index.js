import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
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

const legendOpts = {
  onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
  onHover: (e, item) => alert(`Item with text ${item.text} and index ${item.index} hovered`),
};

const ChartLegendHandlers = () => {

  function getInitialState() {
    return {
      legend: legendOpts
    }
  }

  getInitialState();
  const [state, setState] = useState()

  function applyLegendSettings() {
    //const { value } = legendOptsInput;

    try {
      const opts = JSON.parse(value);

      setState({
        legend: opts
      });
    } catch (e) {
      alert(e.message);
      throw Error(e);
    }
  }

  return (
    <div>
      <h2></h2>
      <p>Hover over label and click</p>
      <Pie data={data} legend={state} />
    </div>
  );

}
export default ChartLegendHandlers