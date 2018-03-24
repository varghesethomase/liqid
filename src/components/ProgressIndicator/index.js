import React, { Component } from 'react';

import './ProgressIndicator.css';

class ProgressIndicator extends Component {
  render() {
    return (
      <div className="progress">
        {this.props.currentQuestion} / {this.props.totalQuestions}
        <svg viewBox="0 0 50 50" className="svg-box">
          <circle
            className="progress-circle"
            cx="25"
            cy="25"
            r="22"
            ref={element => (this.svgCircle = element)}
            style={{
              strokeDasharray: '138.2304',
              strokeDashoffset: 138.2304 * (1 - this.props.progressPercentage)
            }}
          />
        </svg>
      </div>
    );
  }
}

export default ProgressIndicator;
