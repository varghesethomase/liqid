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
      answer: '',
      hasError: false
    };
  }
  goBack = () => {
    this.props.history.goBack();
  };

  getCurrentQuestionPosition = () => {
    let currentPosition = 0;
    const questions = this.props.questionData.questions;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].id === parseInt(this.props.match.params.id)) {
        currentPosition = i;
        break;
      }
    }
    return currentPosition;
  };

  completedPercent = () =>
    this.getCurrentQuestionPosition() /
    this.props.questionData.questions.length;

  updateAnswer = event => {
    this.setState({ answer: event.target.value });
  };

  submitResponse = question => {
    this.props.submitAnswer(question.id, this.state.answer);
    if (
      this.getCurrentQuestionPosition() + 1 <
      this.props.questionData.questions.length
    ) {
      this.props.history.push(
        `/question/${
          this.props.questionData.questions[
            this.getCurrentQuestionPosition() + 1
          ].id
        }`
      );
    } else {
      this.props.history.push('/survey-success');
    }
  };

  getCurrentQuestion = () => {
    const currentQuestion = this.props.questionData.questions.filter(
      question => {
        return parseInt(question.id) === parseInt(this.props.match.params.id);
      }
    );
    return currentQuestion[0];
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const currentQuestion = this.getCurrentQuestion();
    return (
      <div className="question-view">
        {this.state.hasError ? (
          <h1 className="text-center error">Oops! Something went wrong!</h1>
        ) : (
          <div>
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
                  clickSubmit={() => this.submitResponse(currentQuestion)}
                  clickBack={this.goBack}
                />
              </QuestionCard>
            </div>
          </div>
        )}
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
