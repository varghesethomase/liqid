import React from 'react';

import './Header.css';

const Header = props => (
  <nav className="navbar">
    <ul className="brand">
      <li className="navigation">
        <img src="/images/arrow-back.png" />
      </li>
      <li className="logo">Simple Survey</li>
    </ul>
  </nav>
);

export default Header;
