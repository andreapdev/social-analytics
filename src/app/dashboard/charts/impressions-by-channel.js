import BaseChart from "@/components/atomic/organisms/base-chart";
import Card from "@/components/atomic/atoms/card";

async function setChartData(posts, channelInfo) {
  // Aggregate impressions by channelId
  const impressionsByChannel = posts.reduce((acc, item) => {
    const { channelId, impressionNumber } = item;

    if (!acc[channelId]) {
      acc[channelId] = { totalImpressions: 0 };
    }
    acc[channelId].totalImpressions += Number(impressionNumber);
    return acc;
  }, {});

  // Convert the object into an array and sort by channelId
  const sortedImpressions = Object.entries(impressionsByChannel)
    .map(([channelId, { totalImpressions }]) => ({
      channelId: Number(channelId),
      channelName: channelInfo[channelId]?.name || "Unknown",
      color: channelInfo[channelId]?.color || "#CCCCCC",
      totalImpressions,
    }))
    .sort((a, b) => a.channelId - b.channelId);

  // Prepare the chart data
  const data = {
    labels: sortedImpressions.map(({ channelName }) => channelName),
    datasets: [{
      label: "Impressions",
      data: sortedImpressions.map(({ totalImpressions }) => totalImpressions),
      hoverOffset: 4,
      backgroundColor: sortedImpressions.map(({ color }) => color),
    }],
  };

  return data;
}

export default async function ImpressionsByChannel({ className, posts, channelInfo }) {
  const data = await setChartData(posts, channelInfo);

  return (
    <Card extraClass={className}>
      <h3>Impressions by channel</h3>
      <BaseChart data={data} type="Doughnut" />
    </Card>
  );
}