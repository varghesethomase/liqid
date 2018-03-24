import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => (
  <Link to={props.to} className="button">
    {props.children}
  </Link>
);

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default Button;
