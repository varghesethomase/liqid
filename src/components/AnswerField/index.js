import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AnswerField.css';

class AnswerField extends Component {
  renderField = () => {
    const { field: { type, values }, updateAnswer } = this.props;
    if (type === 'text') {
      return <textarea className="answer-text-field" onChange={updateAnswer} />;
    } else if (type === 'dropdown') {
      return (
        <select onChange={updateAnswer}>
          {values.map(option => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      );
    } else if (type === 'radiobutton') {
      return (
        <div>
          {values.map(option => (
            <div key={option.value}>
              <input
                type="radio"
                name="survey-question"
                value={option.value}
                id={option.value}
                onClick={updateAnswer}
              />
              <label htmlFor={option.value}>{option.name}</label>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    return <div className="answer-field-wrapper">{this.renderField()}</div>;
  }
}

AnswerField.propTypes = {
  field: PropTypes.object.isRequired,
  updateAnswer: PropTypes.func.isRequired
};

export default AnswerField;
