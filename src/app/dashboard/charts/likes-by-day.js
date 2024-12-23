import BaseChart from "@/components/atomic/organisms/base-chart";
import { fetchSocialMediaPosts, getChannelInfo } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";
import { formatDateTime } from "@/utils/format-date";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaPosts(filterId);

  // Group likes by day and channelId
  const likesByDay = posts.reduce((acc, item) => {
    const { channelId, createdAt, likeNumber } = item;
    const formattedDate = formatDateTime(createdAt, "day-only");

    if (!acc[formattedDate]) {
      acc[formattedDate] = {};
    }

    if (!acc[formattedDate][channelId]) {
      acc[formattedDate][channelId] = { totalLikes: 0 };
    }

    acc[formattedDate][channelId].totalLikes += Number(likeNumber);
    return acc;
  }, {});

  // Prepare labels (unique dates sorted chronologically)
  const labels = Object.keys(likesByDay).sort((a, b) => new Date(a) - new Date(b));

  // Prepare datasets for each channel
  const channelMap = {}; // To group data by channel
  labels.forEach(date => {
    const channelsOnDate = likesByDay[date];

    Object.entries(channelsOnDate).forEach(([channelId, { totalLikes }]) => {
      if (!channelMap[channelId]) {
        channelMap[channelId] = {
          label: getChannelInfo()[channelId]?.name || "Unknown",
          data: [],
          borderColor: getChannelInfo()[channelId]?.color || "#CCCCCC",
        };
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

  // Format data for the chart
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

export default async function LikesByDay({ channelId, className }) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Likes by day</h3>
      <BaseChart data={data} type="Line" />
    </Card>
  );
}