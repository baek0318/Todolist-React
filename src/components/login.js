import {useState} from 'react';
import {postLogin} from '../api/auth';

const Login = (setAuth) => {
  
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const postInfo = async () => {
    let result = await postLogin({
      email : email,
      password : password
    });
    setAuth(result.login);
  }

  return (
    <div>
      <div>
        <h1>로그인</h1>
      </div>
      <div>
        <input type='email' placeholder='이메일을 입력해주세요' onChange={emailHandler}/>
      </div>
      <div>
        <input type='password' placeholder='비밀번호를 입력해주세요' onChange={passwordHandler}/>
      </div>
      <div>
        <input type='button' value='로그인' onClick={postInfo}/>
      </div>
    </div>
  );
}

export default Login;