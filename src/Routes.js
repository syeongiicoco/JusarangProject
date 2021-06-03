import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import BestPage from './Pages/BestPage/BestPage';
import MainPage from './Pages/MainPage/MainPage';
import Scroll from './Components/Scroll/Scroll';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Scroll />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/bestpage" component={BestPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
