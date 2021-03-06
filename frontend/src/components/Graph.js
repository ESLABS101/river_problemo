import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
             labels: [0,30],
    datasets: [
      {
        label: 'river bank',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'swimmer path',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:0,y:0},{x:100,y:100}]
      }
    ]
  };
  

const Graph = ({result,width}) => {
    for(let i=0;i<7;i++){
        data.datasets[0].data[i]=width;
    }
    data.datasets[1].data[1].x=result.displacement
    data.datasets[1].data[1].y=width
    data.labels[1]=result.displacement
    return (
        <div className="container">
            <h2 style={{color:"white"}}>Line Graph for trajectory</h2>
            <Line data={data}/>
        </div>
    )
}

export default Graph
