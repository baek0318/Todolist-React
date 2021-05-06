import Axios from 'axios';
/*
const postUserInfo = async (email, password, username) => {
  let user = {
    id : null,
    email : "",
    name : ""
  };

  await Axios.post(
    "/auth/signup",
    {
      email : email,
      name : username,
      password : password
    }
  ).then((response) => {
    user.id = response.data.id;
    user.email = response.data.email;
    user.name = response.data.name;
  }).catch((error) => {
    console.log(error);
  });

  return user;
}
*/

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