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
  }
}

const AnswerField = props => {
  console.log(props);
  return (
    <div className="answer-field-wrapper">
      {renderField(props.field.type, props.field.value)}
    </div>
  );
};

export default AnswerField;
