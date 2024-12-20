import DoughnutChart from "@/components/charts/doughnut-chart";
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";

async function setChartData() {
  const posts = await fetchSocialMediaPosts();

  // Step 1: Aggregate impressions by channelName and keep channelId
  const impressionsByChannel = posts.reduce((acc, item) => {
    const { channelId, channelName, impressionNumber } = item;
    if (!acc[channelName]) {
      acc[channelName] = { channelId, totalImpressions: 0 };
    }
    acc[channelName].totalImpressions += Number(impressionNumber);
    return acc;
  }, {});

  // Step 2: Convert the object into an array and sort by channelId
  const sortedImpressions = Object.entries(impressionsByChannel)
    .map(([channelName, { channelId, totalImpressions }]) => ({
      channelId,
      channelName,
      totalImpressions
    }))
    .sort((a, b) => a.channelId - b.channelId);

  const data = {
    labels: sortedImpressions.map(post => post.channelName),
    datasets: [{
      label: 'Impressions',
      data: sortedImpressions.map(post => post.totalImpressions),
      hoverOffset: 4
    }]
  };

  return data;
}

export default async function ImpressionsByChannel({className}) {
  const data = await setChartData();

  return (
    <div className={className}>
      <h3>Impressions by channel</h3>
      <DoughnutChart data={data}/>
    </div>
  );
}