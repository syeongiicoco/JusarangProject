import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
