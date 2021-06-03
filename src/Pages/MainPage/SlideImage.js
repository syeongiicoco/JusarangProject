import React, { Component } from 'react';

class SlideImage extends Component {
  constructor() {
    super();
    this.state = {
      src: [],
    };
  }
  render() {
    const { src } = this.state;
    return (
      <div>
        <img src={src} alt="slide-img" />
      </div>
    );
  }
}

export default SlideImage;
