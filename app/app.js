import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

const appElement = document.querySelector('#app');

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
);

const NotFound = () => (
  <div>
    <h1>Not Found</h1>
  </div>
);

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , appElement);
