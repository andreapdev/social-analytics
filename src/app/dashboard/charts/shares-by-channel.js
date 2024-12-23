import { fetchSocialMediaPosts, getChannelInfo } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";
import BaseChart from "@/components/atomic/organisms/base-chart";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaPosts(filterId);

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
      channelName: getChannelInfo()[channelId]?.name || "Unknown",
      color: getChannelInfo()[channelId]?.color || "#CCCCCC"
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

export default async function SharesByChannel({ className, channelId }) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Shares by channel</h3>
      <BaseChart data={data} type="PolarArea" />
    </Card>
  );
}