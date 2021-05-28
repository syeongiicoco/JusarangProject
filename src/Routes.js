import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
// import MainPage from './Pages/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
=======
import Login from './Pages/Login/Login';
>>>>>>> c34ed09 (login layout)

class Routes extends React.Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Switch>{/* <Route exact path="/" component={MainPage} /> */}</Switch>
        <Footer />
=======
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
>>>>>>> c34ed09 (login layout)
      </Router>
    );
  }
}

export default Routes;
