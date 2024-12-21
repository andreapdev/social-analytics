export async function fetchSocialMediaPosts(filterId) {
  const url = new URL('https://676151f16be7889dc3609aab.mockapi.io/api/social/post');

  if (filterId.length) {
    url.searchParams.append('channelId', filterId);
  }
  
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText);
      return false;
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Fetch error:', error);
    return false;
  }
}

export async function fetchSocialMediaChannels(filterId) {
  const url = new URL('https://676151f16be7889dc3609aab.mockapi.io/api/social/channel');

  if (filterId.length) {
    url.searchParams.append('channelId', filterId);
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText);
      return false;
    }

    const channels = await response.json();
    return channels;
  } catch (error) {
    console.error('Fetch error:', error);
    return false;
  }
}
