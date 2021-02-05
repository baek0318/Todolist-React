import styles from './signin.module.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';

function SigninForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div className={`${styles.wrap}`}>
      <h1>Todolist</h1>
      <main>
        <EmailForm username={email} changeHandler={emailChangeHandler}/>
        <PasswordForm password={password} changeHandler={passwordChangeHandler}/>
        <div className={`${styles.buttons}`}>
          <SigninButton />
          <SignupButton />
        </div>
      </main>
    </div>
  );
}

function EmailForm(props) {

  return (
    <div className={`${styles.emailBlock}`}>
      <label for="email-box">이메일</label><br></br>
      <input className={`${styles.box}`} type="email" placeholder="이메일을 입력해주세요" name="email-box" value={props.email} onChange={props.changeHandler}></input>
    </div>
  );
}

function PasswordForm(props) {

  return (
    <div className={`${styles.passwordBlock}`}>
      <label for="password-box">비밀번호</label><br></br>
      <input className={`${styles.box}`} type="password" placeholder="비밀번호를 입력해주세요" name="password-box" value={props.password} onChange={props.changeHandler}></input>
    </div>
  );
}

function SigninButton() {
  return (
    <div className={`${styles.button}`}>
      <button>로그인</button>
    </div>
  );
} 

function SignupButton() {
  return (
    <div className={`${styles.button}`}>
      <Link to="/signup"><button>회원가입</button></Link>
    </div>
  );
}

export default SigninForm;