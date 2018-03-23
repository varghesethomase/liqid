import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionTypography from '../../components/QuestionTypography';
import AnswerField from '../../components/AnswerField';
import './Question.css';

class Question extends Component {
  completedPercent = () =>
    this.props.questionData.currentQuestion /
    this.props.questionData.questions.length;
  render() {
    const { questionData } = this.props;
    const currentQuestion =
      questionData.questions[questionData.currentQuestion];
    return (
      <div className="question-view">
        <Header />
        <div className="question-wrapper">
          <QuestionCard>
            <ProgressIndicator percent={this.completedPercent} />
            <QuestionTypography text={currentQuestion.question} />
            <AnswerField field={currentQuestion.fieldProperties} />
          </QuestionCard>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionData: state.question.questionData
});

const mapDispatchToProps = dispatch => ({
  changeQuestion: value => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
