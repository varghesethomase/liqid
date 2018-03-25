import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => (
  <button
    className={`button ${props.className}`}
    disabled={props.fieldValue === ''}
    onClick={props.buttonClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default Button;
