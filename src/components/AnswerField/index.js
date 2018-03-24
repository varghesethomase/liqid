import React from 'react';

import './AnswerField.css';

function renderField(type, options) {
  if (type === 'text') {
    return <textarea className="answer-text-field" />;
  } else if (type === 'dropdown') {
    return (
      <select>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    );
  } else if (type === 'radiobutton') {
    return (
      <div>
        {options.map(option => (
          <div key={option.value}>
            <input
              type="radio"
              name={option.name}
              value={option.value}
              id={option.value}
            />
            <label htmlFor={option.value}>{option.name}</label>
          </div>
        ))}
      </div>
    );
  }
}

const AnswerField = props => {
  return (
    <div className="answer-field-wrapper">
      {renderField(props.field.type, props.field.value)}
    </div>
  );
};

export default AnswerField;
