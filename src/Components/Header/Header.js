import React, { Component } from 'react';
import TopHeader from './TopHeader/TopHeader';
import Nav from './Nav/Nav';
import './Header.scss';

class Header extends Component {
  // upButton = () => {
  //   const { y } = this.state;

  //   this.setState({ y: y - 25 }, () => {
  //     console.log(this.state.y);
  //   });
  // };

  render() {
    return (
      <>
        <TopHeader />
        <h1 className="topLogo">JuSarang</h1>
        <Nav />
      </>
    );
  }
}

export default Header;
