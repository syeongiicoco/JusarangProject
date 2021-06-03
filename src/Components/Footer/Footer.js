import React, { Component } from 'react';
import FooterNav from './FooterNav/FooterNav';
// import projuctImg from '../Images/projectImg.png';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <>
        <FooterNav />
        <div className="box">
          <img
            className="footerImg"
            src="http://localhost:3000/Images/Footer/projectImg.png"
            alt="JusarangIMG"
          />
          <div className="leftBox">
            <div className="left">
              {LEFTBOXS.map((leftBoxs, key) => {
                return (
                  <ul className="leftInfo">
                    <li key={key} className="info">
                      {leftBoxs.name}
                    </li>
                    <li key={key} className="info">
                      {leftBoxs.point}
                    </li>
                    <li key={key} className="info">
                      {leftBoxs.list}
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="left">
              {LEFTBOXSTWO.map((leftBoxTwo, key) => {
                return (
                  <ul className="leftInfo">
                    <li key={key} className="info">
                      {leftBoxTwo.name}
                    </li>
                    <li key={key} className="info">
                      {leftBoxTwo.point}
                    </li>
                    <li key={key} className="info">
                      {leftBoxTwo.list}
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="left">
              {LEFTBOXSTHREE.map((leftBoxThree, key) => {
                return (
                  <ul className="leftInfo">
                    <li key={key} className="info">
                      {leftBoxThree.name}
                    </li>
                    <li key={key} className="info">
                      {leftBoxThree.point}
                    </li>
                    <li key={key} className="info">
                      {leftBoxThree.list}
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="leftBoxBottom">
              <div className="left">
                {LEFTBOTTOMBOXS.map((leftBottomBox, key) => {
                  return (
                    <ul className="leftInfo">
                      <li key={key} className="info">
                        {leftBottomBox.name}
                      </li>
                      <li key={key} className="info">
                        {leftBottomBox.point}
                      </li>
                      <li key={key} className="info">
                        {leftBottomBox.list}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="textInfo">
                주사랑은 syeongii의 위탁으로 (주)WECODE가 관리하는 쇼핑몰입니다.
              </div>
              <div className="makeDate">
                copyright (C) 2021 by Jusarang. all rights reserved.
              </div>
            </div>
          </div>
          <div className="rightBox">
            <p className="telTitle">고객행복센터</p>
            <p className="tel">090-0000-1000</p>
            <p className="text">
              평일 10:00 ~ 18:00 / 점심시간 12:00 ~ 13:00
              <br /> 주말, 공휴일 휴무 (1:1 문의를 이용해 주세요)
            </p>
            <p className="text">바로가기 1:1문의 | 교환환불문의</p>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;

const LEFTBOXS = [
  {
    id: 1,
    name: '한국주사랑',
    point: '',
    list: '|',
  },
  {
    id: 2,
    name: '개인정보 관리 책임자',
    point: '강서형',
    list: '|',
  },
  {
    id: 3,
    name: '개인정보 관리 담당자 ',
    point: '윤서준',
    list: '|',
  },
  {
    id: 4,
    name: '호스팅제공자',
    point: '안도현',
    list: '',
  },
];
const LEFTBOXSTWO = [
  {
    id: 1,
    name: '이메일',
    point: 'syeongii78@gmail.com',
    list: '',
  },
  {
    id: 2,
    name: '대표',
    point: 'Syeongii ,Johnywhisky',
    list: '|',
  },
  {
    id: 3,
    name: '사업자등록번호',
    point: '202-10-51700',
    list: '[사업자정보확인]',
  },
];

const LEFTBOXSTHREE = [
  {
    id: 1,
    name: '통신판매업신고버호',
    point: '위코드청 제 2021-05-18호',
    list: '|',
  },
  {
    id: 2,
    name: '주소',
    point: '[7688]과천시 강남구 서준로 000,100호',
    list: '|',
  },
  {
    id: 3,
    name: '고객센터',
    point: '010-7688-5998',
    list: '',
  },
];
const LEFTBOTTOMBOXS = [
  {
    id: 1,
    name: '위코드경제진흥원',
    point: '',
    list: '|',
  },
  {
    id: 2,
    name: '원장',
    point: 'Johnywhisky',
    list: '|',
  },
  {
    id: 3,
    name: '사업자등록번호',
    point: '90876567890876',
    list: '',
  },
];
