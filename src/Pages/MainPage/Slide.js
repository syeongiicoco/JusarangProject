import React, { Component } from 'react';
import WINESLIDE from './MainPageData';
import './Slide.scss';

class Slide extends Component {
  constructor() {
    super();

    this.state = {
      x: 0,
    };
  }

  goLeft = () => {
    const { x } = this.state;
    this.setState({
      x: x === 0 ? -300 : x + 100,
    });
  };

  goRight = () => {
    const { x } = this.state;
    this.setState({
      x: x === -100 * (WINESLIDE.length - 1) ? 0 : x - 100,
    });
  };

  render() {
    const { x } = this.state;
    return (
      <div className="slider">
        {WINESLIDE.map((slide, key) => {
          return (
            <div
              className="slide"
              key={key}
              style={{
                backgroundImage: `url(${slide.img})`,
                transform: `translateX(${x}%)`,
              }}
            ></div>
          );
        })}

        <button className="goLeft" onClick={this.goLeft}>
          left
        </button>
        <button className="goRight" onClick={this.goRight}>
          right
        </button>
      </div>
    );
  }
}

export default Slide;

// const HAPPYIMG = [
//   {
//     id: 1,
//     img: './Images/MainPageImage/happy1.jpg',
//     name: 'Europe',
//     pick: 'MD 추천',
//   },
//   {
//     id: 2,
//     img: './Images/MainPageImage/happy2.jpg',
//     name: 'America',
//     pick: 'MD 추천',
//   },
//   {
//     id: 3,
//     img: './Images/MainPageImage/happy3.jpg',
//     name: 'Asia',
//     pick: 'MD 추천',
//   },
// ];
