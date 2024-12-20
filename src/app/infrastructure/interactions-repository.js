//TODO: class
export async function fetchSocialMediaPosts() {
  try {
    const response = await fetch('https://676151f16be7889dc3609aab.mockapi.io/api/social/post', {
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

export async function fetchSocialMediaChannels() {
  try {
    const response = await fetch('https://676151f16be7889dc3609aab.mockapi.io/api/social/channel', {
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
