import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => (
  <a className="button" onClick={props.onClick}>
    {props.children}
  </a>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default Button;
