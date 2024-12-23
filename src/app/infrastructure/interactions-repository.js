export async function fetchSocialMediaInfo(info, method, filterId) {
  const url = new URL(`https://676151f16be7889dc3609aab.mockapi.io/api/social/${info}`);
  if (filterId.length) {
    url.searchParams.append('channelId', filterId);
  }

  try {
    const response = await fetch(url, {
      method: method,
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText);
      return false;
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Fetch error:', error);

    return false;
  }
}

export async function addSocialMediaPost(data) {
  const url = new URL('https://676151f16be7889dc3609aab.mockapi.io/api/social/post');
  
  try {
    const response = await fetch(url, {
      headers: {'content-type':'application/json'},
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.error('HTTP error:', response.status, response.statusText);
      return false;
    }

    return response.ok;
    
  } catch (error) {
    console.error('Fetch error:', error);
    return false;
  }
}

export function getChannelInfo() {
  return {
    1: {
      name: 'Instagram',
      color: '#00AEB7',
    },
    2: {
      name: 'X',
      color: '#000000',
    },
    3: {
      name: 'TikTok',
      color: '#3A5A40',
    },
    4: {
      name: 'Facebook',
      color: '#922D50',
    },
    5: {
      name: 'Youtube',
      color: '#9A7AA0',
    },
    6: {
      name: 'LinkedIn',
      color: '#FFFFFF',
    },
  };
}