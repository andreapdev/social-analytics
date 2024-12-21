"use client";

import dynamic from 'next/dynamic';
import 'chart.js/auto';

const PolarArea = dynamic(() => import('react-chartjs-2').then((mod) => mod.PolarArea), {
  ssr: false,
});

const PolarAreaChart = ({data}) => {  
  return (
      <PolarArea data={data} />
  );
};

export default PolarAreaChart;