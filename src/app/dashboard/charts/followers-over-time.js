import BarChart from "@/components/charts/bar-chart";
import { fetchSocialMediaChannels } from "@/app/infrastructure/interactions-repository";
import Card from "@/components/atomic/atoms/card";
import { formatDateTime } from "@/utils/format-date";

async function setChartData(filterId) {
  const posts = await fetchSocialMediaChannels(filterId);

  // Step 1: Group followers by day and channel, keeping only the last measurement
  const followersByDay = posts.reduce((acc, item) => {
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
    
    // Step 2: Prepare labels (unique dates sorted chronologically)
    const labels = Object.keys(followersByDay)
    .sort((a, b) => new Date(a) - new Date(b));
  
    // Step 3: Prepare datasets for each channel
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

export default async function FollowersOverTime({channelId, className}) {
  const data = await setChartData(channelId);

  return (
    <Card extraClass={className}>
      <h3>Followers over time</h3>
      <BarChart data={data}/>
    </Card>
  );
}