import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
  goBest = () => {
    this.props.history.push('/bestpage');
  };
  goCountry = () => {
    this.props.history.push('/country/:id');
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
                    <li className="downList" onClick={this.goBest}>
                      베스트
                    </li>
                    <li className="downList" onClick={this.goCountry}>
                      국가별주류
                    </li>
                    {DRINKS.map((drink, index) => {
                      return (
                        <li key={index} className="downList">
                          {drink}
                        </li>
                      );
                    })}
                  </div>
                )}
              </button>
              <div className="menu">
                <div className="category" onClick={this.goCountry}>
                  국가별주류
                  <i class="fas fa-grip-lines-vertical"></i>
                </div>
                <div className="category" onClick={this.goBest}>
                  베스트
                  <i class="fas fa-grip-lines-vertical"></i>
                </div>
                {NAVS.map((nav, index) => {
                  return (
                    <div key={index} className="category">
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

export default withRouter(Nav);
const NAVS = ['고객센터 ', '기획전 ', '이벤트 ', '레시피'];
const DRINKS = ['맥주', '위스키', '보드카', '막걸리', '소주'];
