import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card';
import QuestionTypography from '../../components/QuestionTypography';
import './SurveySuccess.css';

class SurveySuccess extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className="survey-success">
        {questions.map(question => (
          <Card>
            <QuestionTypography text={question.question} />
            <div className="answer">{question.answer}</div>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questionData.questions
});

export default connect(mapStateToProps, null)(SurveySuccess);
