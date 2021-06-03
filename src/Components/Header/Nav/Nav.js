import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navHidden: false,
      goDown: false,
    };
  }
  isNavHidden = () => {
    this.setState({
      navHidden: !this.state.navHidden,
    });
  };

  render() {
    return (
      <nav>
        <div className="nav">
          <div className="hiddenButton">
            <div className="buttonBox">
              <button className="buttonCategory" onClick={this.isNavHidden}>
                <div className="downListBar">
                  <i class="fas fa-bars" />
                  카테고리
                  <i class="fas fa-chevron-down" />
                </div>
                {this.state.navHidden && (
                  <div className="downCategory">
                    {DRINKS.map((drink, key) => {
                      return (
                        <li key={key} className="downList">
                          {drink}
                        </li>
                      );
                    })}
                  </div>
                )}
              </button>
              <div className="menu">
                {NAVS.map((nav, key) => {
                  return (
                    <div key={key} className="category">
                      {nav}
                      <i class="fas fa-grip-lines-vertical"></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
const NAVS = [
  '베스트 ',
  '국가별주류 ',
  '고객센터 ',
  '기획전 ',
  '이벤트 ',
  '레시피',
];
const DRINKS = ['국가별주류', '맥주', '위스키', '보드카', '막걸리', '소주'];
