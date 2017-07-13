import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './app';

const appElement = document.querySelector('#app');
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
  , appElement);
