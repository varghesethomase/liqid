import React from 'react';
import Button from '../Button';

import './CardFooter.css';

const CardFooter = props => (
  <footer className="clearfix">
    <div className="right">
      <Button to={props.back}>Back</Button>
      <Button to={props.next}>Submit</Button>
    </div>
  </footer>
);

export default CardFooter;
