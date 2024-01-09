'use client';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FirstBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
    datasets: [
      {
        label: 'Revenue for November 2019',
        data: [80000, 75000, 49000, 47000, 45000, 34000],
        backgroundColor: 'rgba(16,185,129,1)',
        borderWidth: 1
      }
    ]
  });

  const [chartOptions, setChartOptions] = useState({
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
       
      }
    },
    maintainAspectRatio: false,
    responsive: true
  });

  useEffect(() => {
    // Fetch and update data from API or perform other operations
  }, []);

  return (
    <div className='card bg-slate-200' style={{ height: '300px',width:'500px'}}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default FirstBarChart;
