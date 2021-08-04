import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = ({ caseData, country,  }) => {

    
    const data = {
        labels:  ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            data: [caseData.confirm.value,caseData.recover.value,caseData.death.value],
            backgroundColor: [
                '#f09819',
                '#5ab331',
                'rgb(165 0 0)',
              
            ],
            borderColor: [
                '#f09819',
                '#5ab331',
                'rgb(165 0 0)',
            ],
            borderWidth: 1,
          },
        ],
      };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
    return (
        <div className = "barbox">
             <Bar height = {400} width = {100} data={data} options={options} options={{ maintainAspectRatio: false }} />
        </div>
    )
}

export default BarChart