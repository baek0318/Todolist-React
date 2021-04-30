import Axios from 'axios';

const signUp = (email, password, username) => {
  Axios.post(
    "/auth/signup",
    {
      username : username,
      email : email,
      password : password
    }
  )  
}

export default signUp;