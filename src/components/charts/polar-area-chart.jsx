"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const PolarArea = dynamic(() => import('react-chartjs-2').then((mod) => mod.PolarArea), {
  ssr: false,
});

// const data = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue'
//   ],
//   datasets: [{
//     label: 'Polar Area Chart Label',
//     data: [11, 16, 7, 3, 14],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(75, 192, 192)',
//       'rgb(255, 205, 86)',
//       'rgb(201, 203, 207)',
//       'rgb(54, 162, 235)'
//     ]
//   }]
// };

const PolarAreaChart = ({data}) => {  
  return (
      <PolarArea data={data} />
  );
};

export default PolarAreaChart;