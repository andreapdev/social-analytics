import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";
import PolarAreaChart from "@/components/charts/polar-area-chart";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaPosts();
  console.log(filterId)

  // Step 1: Filter posts based on the filterId
  const filteredPosts = filterId? posts.filter(post => post.channelId == filterId) : posts;

  // Step 2: Aggregate impressions by channelName and keep channelId
  const sharesByChannel = filteredPosts.reduce((acc, item) => {
    const { channelId, channelName, shareNumber } = item;
    if (!acc[channelName]) {
      acc[channelName] = { channelId, totalShares: 0 };
    }
    acc[channelName].totalShares += Number(shareNumber);
    return acc;
  }, {});

  // Step 3: Convert the object into an array and sort by channelId
  const sortedShares = Object.entries(sharesByChannel)
    .map(([channelName, { channelId, totalShares }]) => ({
      channelId,
      channelName,
      totalShares
    }))
    .sort((a, b) => a.channelId - b.channelId);

  const data = {
    labels: sortedShares.map(post => post.channelName),
    datasets: [{
      label: 'Shares',
      data: sortedShares.map(post => post.totalShares),
      hoverOffset: 4
    }]
  };

  return data;
}

export default async function SharesByChannel({className, channelId}) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Shares by channel</h3>
      <PolarAreaChart data={data}/> 
    </Card>
  );
}