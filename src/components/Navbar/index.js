import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Storiex</Link>
      </li>
    </ul>

    <hr />
  </nav>
);

export default Navbar;
