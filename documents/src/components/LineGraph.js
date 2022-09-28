import React from 'react';

import "./style.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

 function LineGraph (props) {

  const { Deaths, Confirmed} = props;



  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
       
      },
    },
  };

  const labels = [];

  const data = {
    labels,
    datasets: [
      {
        label: 'Confirmed',
        data: {Confirmed},
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: {Deaths},
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


return (
    
 
    <div className='lineGraphContainer'>
    
    <Bar  options={options} data={data} /> <br/>

    
       
        
    </div>
  )
};

export default LineGraph;