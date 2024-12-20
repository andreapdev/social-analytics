import BarChart from "@/components/charts/bar-chart";
import { fetchSocialMediaChannels } from "@/app/infrastructure/interactions-repository";
import { formatDateTime } from "@/utils/format-date";
import Card from "@/components/atomic/atoms/card";

//TODO: make mixed if unfiltered - one channel if filtered
async function setChartData( channelId ) {
  const channels = await fetchSocialMediaChannels();
  const followerDetails = getFollowersForChannel(channelId);  

  function getFollowersForChannel(channelId) {
    return channels
      .filter(channel => channel.channelId === channelId) // Filter by channelId
      .map(channel => ({
        id: channel.id,
        followerNumber: Number(channel.followerNumber),
        createdAt: formatDateTime(channel.createdAt)
      })); // Extract id, likeNumber, and createdAt
  }

  const data = {
    labels: followerDetails.map(detail => detail.createdAt),
    datasets: [
      {
        label: 'Followers',
        data: followerDetails.map(detail => detail.followerNumber),
        tension: 0.1,
      },
    ],
  };

  return data;
}

async function getChannelName( channelId ) {
  const channels = await fetchSocialMediaChannels();
  const channel = channels.find((channel) => channel.channelId === channelId);
  return channel ? channel.channelName : "Channel not found";
}

export default async function FollowersOverTime({channelId, className}) {
  const data = await setChartData(channelId);
  const channelName = await getChannelName(channelId);

  return (
    <Card extraClass={className}>
      <h3>{channelName} follower number</h3>
      <BarChart data={data}/>
    </Card>
  );
}