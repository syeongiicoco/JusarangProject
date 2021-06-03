import React, { Component } from 'react';
// import WINESLIDE from './MainPageData';
import './MainPage.scss';
import Slide from './Slide';

class MainPage extends Component {
  state = {
    num: 0,
    banner: 0,
    x: 0,
    centerPageData: [],
  };

  componentDidMount() {
    setInterval(() => {
      const { banner } = this.state;
      this.setState({ banner: banner + 1 > 1 ? 0 : banner + 1 });
    }, 2000);

    fetch('http://localhost:3000/Data/TodayHotDeal.json')
      .then(response => response.json())
      .then(response => {
        this.setState({
          centerPageData: response,
        });
      });
  }

  goToText = e => {
    this.props.history.push(`/mainpage/${e}`);
  };

  nextButton = () => {
    const { x } = this.state;
    if (x === -25) {
      return;
    }

    this.setState({ x: x - 25 });
  };

  beforeButton = () => {
    const { x } = this.state;
    if (x === +25) {
      return;
    }

    this.setState({ x: x + 25 }, () => {
      console.log(this.state.x);
    });
  };

  render() {
    const { banner, x } = this.state;

    return (
      <section className="centerPage">
        <Slide />

        <div className="centerBox">
          <div className="centerText">행복가득 기획전</div>
          <div className="happyExhivition">
            {HAPPYIMG.map((happy, key) => {
              return (
                <div className="exhibition" key={key}>
                  <img
                    className="happyBox"
                    src={happy.img}
                    alt="happyExhivition"
                  />
                  <div
                    className="happyBoxTopText"
                    onClick={() => this.goToText(happy.name)}
                  >
                    {happy.name}
                  </div>
                  <div className="happyBoxBottomText">{happy.pick}</div>
                </div>
              );
            })}
          </div>
          <div
            className="centerBanner"
            style={{ backgroundImage: `url("${BANNERIMG[banner]}")` }}
          />
          <div className="todayHotDeal">
            <span className="todayHotDealText">오늘의 핫딜!</span>
            <div className="todayHotDealInfo">
              <div
                className="todayHotDealImgBox"
                style={{ transform: `translateX(${x}%)` }}
              >
                {this.state.centerPageData.map((centerData, key) => {
                  return (
                    <>
                      <div className="todayHotDealDetail">
                        <div
                          className="todayHotDealImg"
                          style={{
                            backgroundImage: `url('${centerData.img}')`,
                          }}
                        />
                        <div className="todayHotDealName">
                          {centerData.name}
                        </div>
                        <div className="todayHotDealPrice">
                          {centerData.price} 원
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <i class="fas fa-arrow-left" onClick={this.beforeButton} />
            <i class="fas fa-arrow-right" onClick={this.nextButton} />
          </div>
        </div>
      </section>
    );
  }
}

export default MainPage;

const HAPPYIMG = [
  {
    id: 1,
    img: './Images/MainPageImage/happy1.jpg',
    name: 'Europe',
    pick: 'MD 추천',
  },
  {
    id: 2,
    img: './Images/MainPageImage/happy2.jpg',
    name: 'America',
    pick: 'MD 추천',
  },
  {
    id: 3,
    img: './Images/MainPageImage/happy3.jpg',
    name: 'Asia',
    pick: 'MD 추천',
  },
];
const BANNERIMG = [
  './Images/MainPageImage/banner1.jpg',
  './Images/MainPageImage/banner2.jpg',
];
