import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './CardFooter.css';

const CardFooter = props => (
  <footer className="clearfix">
    <div className="right">
      <Button buttonClick={props.clickBack} className="no-transform flat">
        Back
      </Button>
      <Button
        fieldValue={props.fieldValue}
        buttonClick={props.clickSubmit}
        className="no-transform success"
      >
        Submit
      </Button>
    </div>
  </footer>
);

CardFooter.defaultProps = {
  fieldValue: '',
};

CardFooter.propTypes = {
  fieldValue: PropTypes.string,
  clickBack: PropTypes.func.isRequired,
  clickSubmit: PropTypes.func.isRequired,
};

export default CardFooter;
