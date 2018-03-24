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

  completedPercent = () =>
    this.props.match.params.id / this.props.questionData.questions.length;

  updateAnswer = event => {
    this.setState({ answer: event.target.value });
  };

  submitResponse = () => {
    const currentQuestion = this.props.match.params.id;
    this.props.submitAnswer(currentQuestion, this.state.answer);
    this.props.history.push(
      `/question/${this.props.questionData.questions[currentQuestion + 1].id}`
    );
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
      <div>
        {this.state.hasError ? (
          <h1 className="text-center error">Oops! Something went wrong!</h1>
        ) : (
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
