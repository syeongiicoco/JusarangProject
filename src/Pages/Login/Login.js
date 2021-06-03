import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPw: '',
    };
  }

  goMain = () => {
    // const { data } = console.log(data);
    // fetch('http://10.58.7.220:8000/user/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: this.state.userEmail,
    //     password: this.state.userPw,
    //   }),
    // })
    fetch('http://10.58.3.138:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: 'johnywhisky@gmail.com',
        password: '1234qwer',
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', JSON.stringify(data['token']));
        this.props.history.push('/mainpage');
      });
    this.props.history.push('/mainpage');
  };

  goSignIn = () => {
    this.props.history.push('/signin');
  };

  handleKeypress = e => {
    if (e.key === 'Enter' && e.target.value) {
      this.goSignIn();
    }
    if (this.state.userEmail.includes('@') && this.state.userPw.length > 5)
      console.log(e.target.value);
  };

  render() {
    return (
      <>
        <h1 className="loginTitle">로그인</h1>
        <div className="loginBox">
          <div className="memberLogin">
            <span className="loginText">회원 로그인</span>
            <input className="loginId" type="text" placeholder="아이디" />
            <input
              className="loginPw"
              type="password"
              placeholder="비밀번호"
              onKeyPress={this.handleKeypress}
            />
            <button className="loginBtn" onClick={this.goMain}>
              로그인
            </button>
          </div>
          <div className="easyLogin">
            <span className="loginText">간편 로그인</span>
            <button className="snsBtn">FaceBook 간편로그인</button>
            <button className="snsBtn">Naver 간편로그인</button>
            <button className="snsBtn">KAKAO TALK 간편로그인</button>
            <span className="snsDetail">
              * 페이스북 간편로그인시 보안강화 정책으로 인해 오류가 발생할 수
              있습니다. 빠른 정상화를 위해 최선을 다하겠습니다.
            </span>
          </div>
        </div>
        <div className="signInBtn">
          <span className="signInText"> 주사랑 회원가입</span>
          <span className="signInDetail">
            주사랑회원이 되시면 더 많은 혜택과 이벤트에 참여하실 수 있습니다.
            <button className="signIn">주사랑 회원가입</button>
          </span>
        </div>
      </>
    );
  }
}

export default Login;
