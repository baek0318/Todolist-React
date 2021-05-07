const postLogin = async (info={}) => {

  const response = await fetch(
    '/auth/signin',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  });

  return response.json();
}