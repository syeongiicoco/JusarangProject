import React, { Component } from 'react';
import './BestPage.scss';

class BestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestPageData: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/Data/BestPageData/bestPageData.json')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          bestPageData: response,
        });
      });
  }

  render() {
    return (
      <section className="bestPageBox">
        <div className="bestPage">Jusarang Weekly Best</div>
        <div className="bestPageTop">
          Jusarang Weekly Best <b>Top 20</b>
        </div>
        <div className="bestPageProducts">
          {this.state.bestPageData.map((data, key) => {
            return (
              <div className="bestProduct" key={data.id}>
                <div
                  className="productImg"
                  style={{ backgroundImage: `url(${data.img})` }}
                />
                {/* <img className="productImg" src={data.img} alt="productImage" /> */}
                <div className="mainName">{data.name}</div>
                <div className="mainPrice">{data.price}</div>
                <div className="mainAmount">
                  {data.amount}
                  <div className="postscript">{data.postscript}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default BestPage;
