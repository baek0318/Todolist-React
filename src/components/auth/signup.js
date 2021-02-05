import styles from './signup.module.css'

function SignUpForm() {
  return (
    <div className={`${styles.wrap}`}>
      <h1>회원가입</h1>
      <div className={`${styles.main}`}>
        <EmailForm />
        <IdnumberForm />
        <PasswordForm />
        <NameForm />
        <div className={`${styles.buttons}`}>
          <button className={`${styles.signupButton}`}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

function EmailForm() {

  return (
    <div className={`${styles.emailBlock}`}>
      <label for="email-box">이메일</label><br></br>
      <input className={`${styles.box}`} type="email" placeholder="이메일을 입력해주세요" name="email-box"/>
    </div>
  );
}

function IdnumberForm() {

  return(
    <div className={`${styles.idnumberBlock}`}>
      <label for="idnumber-box">인증번호</label><br></br>
      <input className={`${styles.box}`} type="text" placeholder="인증번호를 입력해주세요" name="idnumber-box"/>
    </div>
  );
}

function PasswordForm() {

  return (
    <div className={`${styles.passwordBlock}`}>
      <label for="password-box">비밀번호</label><br></br>
      <input className={`${styles.box}`} type="password" placeholder="비밀번호를 입력해주세요" name="password-box"/>
    </div>
  );
}

function NameForm() {

  return (
    <div className={`${styles.nameBlock}`}>
      <label for="name-box">이름</label><br></br>
      <input className={`${styles.box}`} type="text" placeholder="이름을 입력해주세요" name="name-box"/>
    </div>
  );
}

export default SignUpForm;