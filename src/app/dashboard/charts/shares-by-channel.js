import Card from "@/components/atomic/atoms/card";
import BaseChart from "@/components/atomic/organisms/base-chart";

async function setChartData(posts, channelInfo) {
  // Aggregate shares by channelId
  const sharesByChannel = posts.reduce((acc, item) => {
    const { channelId, shareNumber } = item;
    if (!acc[channelId]) {
      acc[channelId] = { totalShares: 0 };
    }
    acc[channelId].totalShares += Number(shareNumber);
    return acc;
  }, {});

  // Convert aggregated shares into sorted array
  const sortedShares = Object.entries(sharesByChannel)
    .map(([channelId, { totalShares }]) => ({
      channelId: Number(channelId),
      totalShares,
      channelName: channelInfo[channelId]?.name || "Unknown",
      color: channelInfo[channelId]?.color || "#CCCCCC"
    }))
    .sort((a, b) => a.channelId - b.channelId);

  // Format data for the chart
  const data = {
    labels: sortedShares.map(post => post.channelName),
    datasets: [{
      label: "Shares",
      data: sortedShares.map(post => post.totalShares),
      hoverOffset: 4,
      backgroundColor: sortedShares.map(post => post.color),
    }],
  };

  return data;
}

export default async function SharesByChannel({ className, posts, channelInfo }) {
  const data = await setChartData(posts, channelInfo);

  return (
    <Card extraClass={className}>
      <h3>Shares by channel</h3>
      <BaseChart data={data} type="PolarArea" />
    </Card>
  );
}