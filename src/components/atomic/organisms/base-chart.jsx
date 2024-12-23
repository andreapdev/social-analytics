"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const BaseChart = ({ data, type }) => {
  const chartType = type;
  
  const Chart = dynamic(() => import('react-chartjs-2').then((mod) => mod[chartType]), {
    ssr: false,
  });

  return (
    <Chart data={data} />
  );
};

export default BaseChart;