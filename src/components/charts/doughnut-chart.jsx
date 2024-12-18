"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'Doughnut Chart Label',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const DoughnutChart = () => {
  return (
    <div style={{ width: '700px', height: '700px' }}>
      <h1>Example 3: Doughnut Chart</h1>
      <Doughnut data={data} />
    </div>
  );
};
export default DoughnutChart;