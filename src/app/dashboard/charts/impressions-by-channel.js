import DoughnutChart from "@/components/charts/doughnut-chart";
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaPosts(filterId);

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

  // Step 4: Prepare the chart data
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

export default async function ImpressionsByChannel({className, channelId}) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Impressions by channel</h3>
      <DoughnutChart data={data}/>
    </Card>
  );
}