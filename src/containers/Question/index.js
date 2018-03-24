import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionTypography from '../../components/QuestionTypography';
import AnswerField from '../../components/AnswerField';
import CardFooter from '../../components/CardFooter';
import { submitAnswer } from './actions';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    };
  }
  goBack = () => {
    this.props.history.goBack();
  };

  completedPercent = () =>
    this.props.questionData.currentQuestion /
    this.props.questionData.questions.length;

  updateAnswer = event => {
    this.setState({ answer: event.target.value });
  };

  submitResponse = () => {
    const currentQuestion = this.props.questionData.currentQuestion;
    this.props.submitAnswer(currentQuestion, this.state.answer);
    this.props.history.push(
      `/question/${this.props.questionData.questions[currentQuestion + 1].id}`
    );
  };

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
            <AnswerField
              field={currentQuestion.fieldProperties}
              updateAnswer={this.updateAnswer}
            />
            <CardFooter
              clickSubmit={this.submitResponse}
              clickBack={this.goBack}
            />
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
  submitAnswer: (id, answer) => dispatch(submitAnswer(id, answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Question)
);
