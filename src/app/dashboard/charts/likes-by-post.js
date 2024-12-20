import LineChart from "@/components/charts/line-chart";
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";

async function setChartData( channelId ) {
  const posts = await fetchSocialMediaPosts();
  const postDetails = getPostDetailsForChannel(channelId);

  function formatDateTime(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  function getChannelName (channelId) {
    return posts
      .filter(post => post.channelId === channelId)
      .map(post => ({
        name: post.channelName
      }));
  }

  //TODO: order by date
  function getPostDetailsForChannel(channelId) {
    return posts
      .filter(post => post.channelId === channelId) // Filter by channelId
      .map(post => ({
        id: post.id,
        likeNumber: Number(post.likeNumber),
        createdAt: formatDateTime(post.createdAt)
      })); // Extract id, likeNumber, and createdAt
  }

  const data = {
    labels: postDetails.map(post => post.createdAt),
    datasets: [
      {
        label: 'Likes',
        data: postDetails.map(post => post.likeNumber),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return data;
}

async function getChannelName( channelId ) {
  const posts = await fetchSocialMediaPosts();
  const post = posts.find((post) => post.channelId === channelId);
  return post ? post.channelName : "Channel not found";
}

export default async function LikesByPost({channelId, className}) {
  const data = await setChartData(channelId);
  const channelName = await getChannelName(channelId);

  return (
    <div className={className}>
      <h3>{channelName} likes by post</h3>
      <LineChart data={data}/>
    </div>
  );
}