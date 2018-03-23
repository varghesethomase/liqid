import React from 'react';

import './QuestionCard.css';

const QuestionCard = props => (
  <div className="question-card">{props.children}</div>
);

export default QuestionCard;
