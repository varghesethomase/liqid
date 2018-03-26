import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AnswerField.css';

class AnswerField extends Component {
  constructor(props) {
    super(props);
    this.renderField = this.renderField.bind(this);
  }

  renderField() {
    const {
      currentQuestion: {
        answer,
        fieldProperties: { type, values },
      },
      updateAnswer,
    } = this.props;
    if (type === 'text') {
      return (
        <textarea
          className="answer-field__text-field"
          onChange={updateAnswer}
          value={answer}
        />
      );
    } else if (type === 'dropdown') {
      return (
        <select onChange={updateAnswer} value={answer}>
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
              <label htmlFor={option.value}>
                <input
                  type="radio"
                  name="survey-question"
                  value={option.value}
                  id={option.value}
                  onClick={updateAnswer}
                  defaultChecked={answer === option.value}
                />
                {option.name}
              </label>
            </div>
          ))}
        </div>
      );
    }
    return (null);
  }

  render() {
    return <div className="answer-field">{this.renderField()}</div>;
  }
}

AnswerField.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  updateAnswer: PropTypes.func.isRequired,
};

export default AnswerField;
