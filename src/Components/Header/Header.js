import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  goMain = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <>
        <TopHeader />
        <h1 className="topLogo" onClick={this.goMain}>
          JuSarang
        </h1>
        <Nav />
      </>
    );
  }
}

export default withRouter(Header);
