import { fetchSocialMediaPosts } from "@/app/lib/data";
import PolarAreaChart from "@/components/charts/polar-area-chart";

async function setChartData() {
  const posts = await fetchSocialMediaPosts();

  // Step 1: Aggregate impressions by channelName and keep channelId
  const sharesByChannel = posts.reduce((acc, item) => {
    const { channelId, channelName, shareNumber } = item;
    if (!acc[channelName]) {
      acc[channelName] = { channelId, totalShares: 0 };
    }
    acc[channelName].totalShares += Number(shareNumber);
    return acc;
  }, {});

  // Step 2: Convert the object into an array and sort by channelId
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

export default async function SharesByChannel( props ) {
  const {className} = props;
  const data = await setChartData();

  return (
    <div className={className}>
      <h3>Shares by channel</h3>
      <PolarAreaChart data={data}/> 
    </div>
  );
}