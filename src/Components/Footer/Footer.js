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
                ???????????? syeongii??? ???????????? (???)WECODE??? ???????????? ??????????????????.
              </div>
              <div className="makeDate">
                copyright (C) 2021 by Jusarang. all rights reserved.
              </div>
            </div>
          </div>
          <div className="rightBox">
            <p className="telTitle">??????????????????</p>
            <p className="tel">090-0000-1000</p>
            <p className="text">
              ?????? 10:00 ~ 18:00 / ???????????? 12:00 ~ 13:00
              <br /> ??????, ????????? ?????? (1:1 ????????? ????????? ?????????)
            </p>
            <p className="text">???????????? 1:1?????? | ??????????????????</p>
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
    name: '???????????????',
    point: '',
    list: '|',
  },
  {
    id: 2,
    name: '???????????? ?????? ?????????',
    point: '?????????',
    list: '|',
  },
  {
    id: 3,
    name: '???????????? ?????? ????????? ',
    point: '?????????',
    list: '|',
  },
  {
    id: 4,
    name: '??????????????????',
    point: '?????????',
    list: '',
  },
];
const LEFTBOXSTWO = [
  {
    id: 1,
    name: '?????????',
    point: 'syeongii78@gmail.com',
    list: '',
  },
  {
    id: 2,
    name: '??????',
    point: 'Syeongii ,Johnywhisky',
    list: '|',
  },
  {
    id: 3,
    name: '?????????????????????',
    point: '202-10-51700',
    list: '[?????????????????????]',
  },
];

const LEFTBOXSTHREE = [
  {
    id: 1,
    name: '???????????????????????????',
    point: '???????????? ??? 2021-05-18???',
    list: '|',
  },
  {
    id: 2,
    name: '??????',
    point: '[7688]????????? ????????? ????????? 000,100???',
    list: '|',
  },
  {
    id: 3,
    name: '????????????',
    point: '010-7688-5998',
    list: '',
  },
];
const LEFTBOTTOMBOXS = [
  {
    id: 1,
    name: '????????????????????????',
    point: '',
    list: '|',
  },
  {
    id: 2,
    name: '??????',
    point: 'Johnywhisky',
    list: '|',
  },
  {
    id: 3,
    name: '?????????????????????',
    point: '90876567890876',
    list: '',
  },
];
