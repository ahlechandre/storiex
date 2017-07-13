import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
// Components
import Navbar from './components/Navbar';
// Scenes
import Home from './scenes/Home';
import Browse from './scenes/Browse';
import ManageProfiles from './scenes/ManageProfiles';
import NotFound from './scenes/NotFound';

class App extends Component {

  componentWillMount() {
    console.log('checking for login authentications...');
  }

  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/manageProfiles" component={ManageProfiles} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
