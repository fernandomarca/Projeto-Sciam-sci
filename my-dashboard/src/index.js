import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/material-dashboard-react.css'

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import App from './App';
import Admin from './layouts/Admin'
import Gaveta from './layouts/Gaveta/index'
import Orca from './layouts/Orca'

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin2" component={Gaveta} />
      <Route path="/orcamento" component={Orca} />
    </Switch>
  </Router>,
  document.getElementById('root')
);