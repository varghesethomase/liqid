import React from 'react';

import Card from '../Card';
import './QuestionCard.css';

const QuestionCard = props => (
  <Card className="question-card">{props.children}</Card>
);

export default QuestionCard;
