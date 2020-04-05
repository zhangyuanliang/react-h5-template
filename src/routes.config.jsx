import React, { Component } from 'react';
import  { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Home from './pages/Home'


const history = createBrowserHistory();

export default class RoutesConfig extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute  path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
