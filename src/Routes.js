import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import MainPage from './Pages/MainPage/MainPage';
import Scroll from './Components/Scroll/Scroll';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scroll />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
