import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopHeader.scss';

class TopHeader extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      const { num } = this.state;
      this.setState({ num: num + 1 > 3 ? 0 : num + 1 });
    }, 4000);
  }
  goLogin = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="topHeader">
            <div className="topNews">
              <div className="newsBox">
                <div className="notion">공지사항 | </div>
                <div className="notionBtn">
                  <i class="fas fa-chevron-circle-up" />
                  <i class="fas fa-chevron-circle-down" />
                </div>
                <div className="news">
                  <ul
                    className="newsList"
                    style={{
                      transform: `translateY(-${this.state.num * 100}%)`,
                    }}
                  >
                    <li className="list">
                      <Link
                        to
                        className="changeNews"
                        href="/board/board.html?code=cepa5678_board3&amp;page=1&amp;type=v&amp;num1=999866&amp;num2=00000&amp;lock=N"
                      >
                        [21/02/16]2021년 설날 농사랑 후기이벤트 당첨자 발표
                      </Link>
                    </li>
                    <li className="list">
                      <Link
                        to
                        className="changeNews"
                        href="/board/board.html?code=cepa5678_board3&amp;page=1&amp;type=v&amp;num1=999862&amp;num2=00000&amp;lock=N"
                      >
                        [21/05/14][19차.푸드체험단] 당첨자 안내드립니다.
                      </Link>
                    </li>
                    <li className="list">
                      <Link
                        to
                        className="changeNews"
                        href="/board/board.html?code=cepa5678_board3&amp;page=1&amp;type=v&amp;num1=999863&amp;num2=00000&amp;lock=N"
                      >
                        [21/04/15][18차.푸드체험단] 당첨자 안내드립니다.
                      </Link>
                    </li>
                    <li className="list">
                      <Link
                        to
                        className="changeNews"
                        href="/board/board.html?code=cepa5678_board3&amp;page=1&amp;type=v&amp;num1=999864&amp;num2=00000&amp;lock=N"
                      >
                        [21/03/16][17차.푸드체험단] 당첨자 안내드립니다.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menuList">
                {/* <div className="right"> */}
                <ul className="topMenu">
                  <li className="goMenu" onClick={this.goLogin}>
                    로그인
                  </li>
                  {MENUS.map((menu, key) => {
                    return (
                      <li key={key} className="goMenu">
                        {menu}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(TopHeader);
const MENUS = ['회원가입', '마이페이지', '주문조회', '고객센터'];
