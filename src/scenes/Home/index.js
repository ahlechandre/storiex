import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/browse">Profile 1</Link>        
      </li>
      <li>
        <Link to="/browse">Profile 2</Link>        
      </li>
      <li>
        <Link to="/manageProfiles">Manage Profiles</Link>        
      </li>
    </ul>
  </div>
);

export default Home;
