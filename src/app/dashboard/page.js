import BarChart from "@/components/charts/bar-chart";
import DoughnutChart from "@/components/charts/doughnut-chart";
import LineChart from "@/components/charts/line-chart";
import PolarAreaChart from "@/components/charts/polar-area-chart";

export default function Page() {
  return <>
    <LineChart/>
    <BarChart/>
    <DoughnutChart/>
    <PolarAreaChart/>
  </>
  ;
}