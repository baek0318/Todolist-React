import {useState} from 'react';
import {postUserInfo} from '../api/auth';

const Signup = ({setAuth}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }
  
  const signup = (e) => {
    postUserInfo
  }

  return (
    <div>
      <div>
        <div>Email</div>
        <input type='email' placeholder='이메일을 입력해주세요' onChange={emailHandler}/>
      </div>
      <div>
        <div>Password</div>
        <input type='password' placeholder='비밀번호를 입력해주세요' onChange={passwordHandler}/>
      </div>
      <div>
        <div>Name</div>
        <input type='text' placeholder='이름을 입력해주세요' onChange={usernameHandler}/>
      </div>
      <div>
        <input type='button' value='회원가입' onClick={signup}/>
      </div>
    </div>
  );
}

export default Signup;