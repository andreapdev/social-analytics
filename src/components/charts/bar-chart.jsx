"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';
//TODO: unify charts
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

const BarChart = ({ data }) => {
  return (
    <Bar data={data} />
  );
};

export default BarChart;