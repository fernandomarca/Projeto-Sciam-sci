import React from 'react';
import { Bar } from 'react-chartjs-2';

/*
const data = {
    labels: ['Cancelli', 'Centro', 'Coqueiral', "Country", "Guarujá", "Neva", "Pioneiros Catar."],
    datasets: [
        {
            label: 'Imóveis por Bairro',
            backgroundColor: 'rgb(34, 0, 255,0.2)',
            borderColor: 'rgb(34, 0, 255)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgb(34, 0, 255,0.4)',
            hoverBorderColor: 'rgb(34, 0, 255)',
            data: [3, 26, 4, 6, 1, 3, 1]
        }
    ]
};

*/

const Chart2 = (props) => {
    const { barData } = props
    //console.log(barData)
    return (
        <div>

            <Bar
                data={barData}
                width={100}
                height={50}
                options={{

                }}
            />
        </div>
    );
}

export default Chart2