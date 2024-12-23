import BaseChart from "@/components/atomic/organisms/base-chart";
import Card from "@/components/atomic/atoms/card";
import { formatDateTime } from "@/utils/format-date";

async function setChartData(channels, channelInfo) {
  // Group followers by day and channel, keeping only the last measurement
  const followersByDay = channels.reduce((acc, item) => {
    const { channelId, createdAt, channelName, followerNumber } = item;
    const formattedDate = formatDateTime(createdAt, "day-only");

    if (!acc[formattedDate]) {
      acc[formattedDate] = {};
    }

    // Check if the channel exists for the date or if the current createdAt is later
    if (
      !acc[formattedDate][channelId] ||
      new Date(createdAt) > new Date(acc[formattedDate][channelId].createdAt)
    ) {
      acc[formattedDate][channelId] = {
        channelName,
        totalFollowers: Number(followerNumber), // Use the latest followerNumber
        createdAt // Keep createdAt to compare timestamps
      };
    }

      return acc;
    }, {});
    
    // Prepare labels (unique dates sorted chronologically)
    const labels = Object.keys(followersByDay)
    .sort((a, b) => new Date(a) - new Date(b));
  
    // Prepare datasets for each channel
    const channelMap = {}; // To group data by channel
    labels.forEach(date => {
      const channelsOnDate = followersByDay[date];
      Object.entries(channelsOnDate).forEach(([channelId, { channelName, totalFollowers }]) => {
        if (!channelMap[channelId]) {
          channelMap[channelId] = { label: channelName, data: [] };
        }
        channelMap[channelId].data.push(totalFollowers);
      });
  
      // Fill in missing dates with 0 for channels without data
      Object.keys(channelMap).forEach(id => {
        if (!channelsOnDate[id]) {
          channelMap[id].data.push(0);
        }
      });
    });
  

    // Format data for the chart
    const datasets = Object.entries(channelMap).map(([channelId, channel]) => ({
      ...channel,
      backgroundColor: channelInfo[channelId]?.color,
      label: channelInfo[channelId]?.name,
      fill: false,
      tension: 0.1,
    }));

    return {
      labels,
      datasets,
    };
}

export default async function FollowersOverTime({channels, channelInfo, className}) {
  const data = await setChartData(channels, channelInfo);

  return (
    <Card extraClass={className}>
      <h3>Followers over time</h3>
      <BaseChart data={data} type={"Bar"}/>
    </Card>
  );
}