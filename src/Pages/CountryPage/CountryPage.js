import React, { Component } from 'react';
import './CountryPage.scss';

class CountryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPageData: [],
      noData: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getData();
    }
  }

  getData = () => {
    const countryData = this.props.match.params.id;
    fetch(`http://localhost:3000/Data/CountryPageData/CountryPageData.json`)
      .then(response => response.json())
      .then(response => {
        let mainPageData =
          countryData === '전체상품'
            ? response
            : response.filter(mainData => mainData.made_in === countryData);

        this.setState({
          mainPageData,
        });
      });
  };

  goCountry = country => {
    this.props.history.push(`${country}`);
  };

  goList = line => {
    let sortData = [...this.state.mainPageData];
    sortData.sort((a, b) => {
      if (line === '판매량순') {
        return b.sell - a.sell;
      }
      if (line === '낮은가격순') {
        return a.price - b.price;
      }
      if (line === '높은가격순') {
        return b.price - a.price;
      }
    });

    this.setState({
      mainPageData: sortData,
    });
  };

  render() {
    return (
      <section className="mainPageSection">
        <div className="mainPage">
          <span className="liquorTitle">Liquor By Country</span>
        </div>
        <div className="countryTable">
          {COUNTRIES.map((country, key) => {
            return (
              <div
                className="country"
                key={key}
                onClick={() => this.goCountry(country)}
              >
                {country}
              </div>
            );
          })}
        </div>
        <div className="productDetail">
          <span>
            총 {this.state.mainPageData.length}개의 부여 상품이 있습니다.
          </span>
          <ul className="productLine">
            {PROUDUCTLINEUP.map((line, key) => {
              return (
                <li className="lineList" onClick={() => this.goList(line)}>
                  {line}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="countryProduct">
          {this.state.mainPageData.map((mainData, key) => {
            return (
              <div className="mainProduct" key={mainData.id}>
                <div
                  className="mainData"
                  style={{
                    backgroundImage: `url('${mainData.thumbnail_img}')`,
                  }}
                >
                  <i class="fas fa-shopping-cart" />
                </div>
                <div className="productName">{mainData.name}</div>

                <div className="costBox">
                  <div className="productPrimeCost">
                    {mainData.discounted_price &&
                      mainData.discounted_price + '원'}
                  </div>
                  <span className="discount">
                    {mainData.discount_rate !== 0 &&
                      mainData.discount_rate + '%' + '할인'}{' '}
                  </span>
                </div>
                <div className="productSalePrice">
                  {mainData.discount_rate !== 0 && mainData.price}
                </div>
                <div className="productPostscript">{mainData.reviews}</div>
              </div>
            );
          })}
        </div>
        {/* <button className="page">1</button> */}
      </section>
    );
  }
}

export default CountryPage;

const COUNTRIES = [
  '전체상품',
  '한국',
  '미국',
  '독일',
  '영국',
  '일본',
  '중국',
  '벨기에',
  '프랑스',
  '멕시코',
  '브라질',
  '러시아',
  '스페인',
  '이탈리아',
  '네덜란드',
  '포르투칼',
];
const PROUDUCTLINEUP = ['판매량순', '낮은가격순', '높은가격순'];
