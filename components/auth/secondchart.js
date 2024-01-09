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

const SecondBarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Meintenance'],
    datasets: [
      {
        label: 'Revenue for November 2019',
        data: [182000, 130000, 78000, 76000, 25000, 23000],
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

export default SecondBarChart;
