"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May'],
//   datasets: [
//     {
//       label: 'Line Chart Label',
//       data: [65, 59, 80, 81, 56],
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1,
//     },
//   ],
// };
const LineChart = (props) => {
  const {data} = props

  return (
    <Line data={data} />
  );
};
export default LineChart;