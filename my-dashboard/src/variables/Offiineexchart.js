/* App.js */
import React, { Component } from 'react'
import CanvasJSReact from '../../src/assets/canvasChart/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
    render() {
        const options = {
            title: {
                text: "Distribuição Imóveis x Bairro"
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Apple", y: 10 },
                        { label: "Orange", y: 15 },
                        { label: "Banana", y: 25 },
                        { label: "Mango", y: 30 },
                        { label: "Grape", y: 28 }
                    ]
                }
            ]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default Chart;                    