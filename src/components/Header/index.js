import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => (
  <nav className="navbar">
    <ul className="brand">
      <li className="navigation">
        <button onClick={props.goBack}>
          <img src="/images/arrow-back.png" alt="back" />
        </button>
      </li>
      <li className="logo">Simple Survey</li>
    </ul>
  </nav>
);

Header.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default Header;
