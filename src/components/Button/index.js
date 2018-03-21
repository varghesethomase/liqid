import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => (
  <Link to={props.to} class="button">
    {props.children}
  </Link>
);

export default Button;
