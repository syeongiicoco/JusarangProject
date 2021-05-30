import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SignIn.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      idEntered: '',
      isIdVaild: false,
      passwordEntered: '',
      isPasswordVaild: false,
      passwordChk: '',
      nameEntered: '',
      phoneEntered: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      //input에 name 값을 설정해두고 여러 값을 사용하기
    });
  }; // input 이 event target 이고  input 이 가지고 있는 value 값을 setstate를 통해서 id 값을 설정해준다

  validateName = idEntered => {
    if (idEntered.length > 5) {
      this.setState(
        {
          isIdVaild: false,
          idEntered,
        },
        showMsg()
      );
      function showMsg() {
        alert('PASS');
      }
    } else {
      this.setState(
        {
          isIdVaild: true,
          idEntered,
        },
        showAnotherMsg()
      );
      function showAnotherMsg() {
        alert('FAIL');
      }
    }
  };

  goMain = () => {
    this.props.history.push('/login');
  };

  endSignIn = e => {
    // e.preventDefault();
    const { idEntered, passwordEntered, nameEntered, phoneEntered } =
      this.state;
    fetch(' http://10.58.0.95:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: idEntered,
        password: passwordEntered,
        name: nameEntered,
        phone_number: phoneEntered,
      }),
    });
    this.setState({
      email: idEntered,
      password: passwordEntered,
      name: nameEntered,
      phone_number: phoneEntered,
    })
      .then(res => res.json())
      .then(data => {
        // if (data.MESSAGE === 'INVALID EMAIL') {
        //   alert('e-mail형식으로 입력해주세요');
        // }
        // if (data.MESSAGE === 'INVALID PASSWORD') {
        //   alert('pw를 5글자 이상 입력해주세요');
        // }
        // if (data.MESSAGE === 'SUCCESS') {
        //   alert('환영합니다.');
        //   this.props.history.push('/mains');
        // }
      });
  };

  render() {
    // console.log(this.endSignIn);
    return (
      <section className="signIn">
        <h1 className="signInTitle">본인 인증 및 회원정보 입력</h1>
        <div className="verification">본인확인</div>
        <div className="verificationDetailBox">
          <div className="verificationDetail">
            휴대폰 인증을 통하여 본인인증을 하셔야 합니다.
          </div>
          <div className="verificationDetail">
            인증 버튼을 눌러 본인인증을 진행해 주세요.
          </div>
        </div>
        <div className="verificationQuestion">휴대폰 인증이란?</div>
        <button className="verificationPhone">휴대폰인증</button>
        <div className="infoBox">
          회원정보입력
          <span className="infoDetail">*표시는 필수입력항목입니다.</span>
        </div>
        <div className="idBox">
          <span className="idBoxText">이름</span>
          {/* input에서 값이 변경될때마다 id 값이 바뀜 또한 value 값도 설정해줘야
          하는데 */}
          <input
            name="name"
            type="text"
            className="textBox"
            onChange={this.handleChange}
            // value={this.state.nameEntered}
            placeholder="이름"
          />
        </div>
        <div className="idBox">
          <span className="idBoxText">아이디</span>
          <input
            name="id"
            type="text"
            className="textBox"
            onChange={this.handleChange}
            // value={this.state.idEntered}
            placeholder="아이디"
          />
          <button className="checkBox" onClick={this.validateName}>
            중복확인
          </button>
        </div>
        <div className="idBox">
          <span className="idBoxText">비밀번호</span>
          <input
            name="password"
            type="text"
            className="textBox"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <span className="idBoxTextDetail">
            * 영문 대소문자/숫자/특수문자를 혼용하여 2종류 10~16자 또는 3종류
            8~16자
          </span>
        </div>
        {/* <div className="idBox">
          <span className="idBoxText">비밀번호 확인</span>
          <input
            name="password"
            type="text"
            className="textBox"
            onChange={this.handleChange}
            value={this.state.passwordChk}
          />
        </div> */}
        <div className="idBox">
          <span className="idBoxText">휴대폰</span>
          <input
            type="text"
            className="textBox"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>
        <div className="endBox">
          <button className="endSignIn" onClick={this.endSignIn}>
            가입완료
          </button>
          <button className="goBack" onClick={this.goMain}>
            이전으로
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(SignIn);
