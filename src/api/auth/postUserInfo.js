const postUserInfo = async (user = {}) => {
  let url = '/auth/signup';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  return response.json();
}

export default postUserInfo;