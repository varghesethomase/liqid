import React from 'react';

import './ProgressIndicator.css';

const ProgressIndicator = props => (
  <div className="progress">
    {props.currentQuestion} / {props.totalQuestions}
    <svg viewBox="0 0 50 50" className="svg-box">
      <circle
        className="progress-circle"
        cx="25"
        cy="25"
        r="22"
        style={{ strokeDasharray: '137.4', strokeDashoffset: '29.6784' }}
      />
    </svg>
  </div>
);

export default ProgressIndicator;
