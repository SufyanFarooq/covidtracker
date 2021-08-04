import React from 'react';
import { Pie } from 'react-chartjs-2';



const PieChart = ({caseData}) => {
  const data = {
    labels: ['Confirm', 'Recover', 'Death'],
    datasets: [
      {
        label: '# of Votes',
        data: [caseData.confirm.value, caseData.recover.value, caseData.death.value],
        backgroundColor: [
          '#f09819',
          '#5ab331',

                'rgb(165 0 0)'
                
        ],
        borderColor: [
          '#f09819',
          '#5ab331',
          'rgb(165 0 0)'

        ],
        borderWidth: 1,
      },
    ],
  };
  
  return(
    <div className='piebox'>
   
    <Pie
     width={400}
	height={400}
	options={{ maintainAspectRatio: false }}
    data={data} />
     </div>
  )
  };

export default PieChart;