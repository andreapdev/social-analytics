import LineChart from "@/components/charts/line-chart";
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";
import { formatDateTime } from "@/utils/format-date";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaPosts(filterId);

    // Step 1: Group likes by day and channel
    const likesByDay = posts.reduce((acc, item) => {
      const { channelId, createdAt, channelName, likeNumber } = item;
      const formattedDate = formatDateTime(createdAt, "day-only");
  
      if (!acc[formattedDate]) {
        acc[formattedDate] = {};
      }
  
      if (!acc[formattedDate][channelId]) {
        acc[formattedDate][channelId] = { channelName, totalLikes: 0 };
      }
  
      acc[formattedDate][channelId].totalLikes += Number(likeNumber);
      return acc;
    }, {});
  
    // Step 2: Prepare labels (unique dates)
    const labels = Object.keys(likesByDay).sort();
  
    // Step 3: Prepare datasets for each channel
    const channelMap = {}; // To group data by channel
    labels.forEach(date => {
      const channelsOnDate = likesByDay[date];
      Object.entries(channelsOnDate).forEach(([channelId, { channelName, totalLikes }]) => {
        if (!channelMap[channelId]) {
          channelMap[channelId] = { label: channelName, data: [] };
        }
        channelMap[channelId].data.push(totalLikes);
      });
  
      // Fill in missing dates with 0 for channels without data
      Object.keys(channelMap).forEach(id => {
        if (!channelsOnDate[id]) {
          channelMap[id].data.push(0);
        }
      });
    });
  
    // Step 4: Format data for the chart
    const datasets = Object.values(channelMap).map(channel => ({
      ...channel,
      fill: false,
      tension: 0.1,
    }));
  
    return {
      labels,
      datasets,
    };
}

export default async function LikesByDay({channelId, className}) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Likes by day</h3>
      <LineChart data={data}/>
    </Card>
  );
}