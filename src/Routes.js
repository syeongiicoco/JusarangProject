import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>{/* <Route exact path="/" component={MainPage} /> */}</Switch>
      </Router>
    );
  }
}

export default Routes;
