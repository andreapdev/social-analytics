import BaseChart from "@/components/atomic/organisms/base-chart";
import Card from "@/components/atomic/atoms/card";
import { formatDateTime } from "@/utils/format-date";

async function setChartData(posts, channelInfo) {
  // Group clicks by day and channelId
  const clicksByDay = posts.reduce((acc, item) => {
    const { channelId, createdAt, clickNumber } = item;
    const formattedDate = formatDateTime(createdAt, "day-only");

    if (!acc[formattedDate]) {
      acc[formattedDate] = {};
    }

    if (!acc[formattedDate][channelId]) {
      acc[formattedDate][channelId] = { totalClicks: 0 };
    }

    acc[formattedDate][channelId].totalClicks += Number(clickNumber);
    return acc;
  }, {});

  // Prepare labels (unique dates sorted chronologically)
  const labels = Object.keys(clicksByDay).sort((a, b) => new Date(a) - new Date(b));

  // Prepare datasets for each channel
  const channelMap = {}; // To group data by channel
  labels.forEach(date => {
    const channelsOnDate = clicksByDay[date];

    Object.entries(channelsOnDate).forEach(([channelId, { totalClicks }]) => {
      if (!channelMap[channelId]) {
        channelMap[channelId] = {
          label: channelInfo[channelId]?.name || "Unknown",
          data: [],
          borderColor: channelInfo[channelId]?.color || "#CCCCCC",
        };
      }
      
      channelMap[channelId].data.push(totalClicks);
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

export default async function ClicksByDay({ posts, className, channelInfo }) {
  const data = await setChartData(posts, channelInfo);

  return (
    <Card extraClass={className}>
      <h3>Clicks by day</h3>
      <BaseChart data={data} type="Line" />
    </Card>
  );
}