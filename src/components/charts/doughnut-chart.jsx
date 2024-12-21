"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

 const DoughnutChart = ({data}) => {
  return (
      <Doughnut data={data} />
  );
};

export default DoughnutChart;