import React, { Component } from 'react';
import './FooterNav.scss';

class FooterNav extends Component {
  render() {
    return (
      <>
        <div className="footerBox">
          <ul className="footerMenu">
            {FOOTERNAVS.map((footernav, key) => {
              return (
                <div className="listBox">
                  <li key={key} className="footerMenuList">
                    {footernav}
                  </li>
                  |
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default FooterNav;

const FOOTERNAVS = [
  '주사랑소개 ',
  '이메일무단수집거부 ',
  '개인정보처리방침 ',
  '이용약관',
  '입점신청',
  '푸드체험관',
  '고객센터',
];
