"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = ({data}) => {
  return (
    <Line data={data} />
  );
};
export default LineChart;