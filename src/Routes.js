import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import BestPage from './Pages/BestPage/BestPage';
import MainPage from './Pages/MainPage/MainPage';
import Scroll from './Components/Scroll/Scroll';
import CountryPage from './Pages/CountryPage/CountryPage';
import SignIn from './Pages/SignIn/SignIn';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scroll />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/bestpage" component={BestPage} />
          <Route exact path="/country/:id" component={CountryPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
