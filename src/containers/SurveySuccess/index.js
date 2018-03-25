import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Card';
import QuestionTypography from '../../components/QuestionTypography';
import './SurveySuccess.css';

class SurveySuccess extends Component {
  constructor(props) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
  }
  navigateBack() {
    this.props.history.goBack();
  }
  render() {
    const { questions } = this.props;
    return (
      <React.Fragment>
        <Header goBack={this.navigateBack} />
        <div className="survey-success-wrapper">
          {questions.map(question => (
            <Card className="survey-success-card" key={question.id}>
              <QuestionTypography text={question.question} />
              <div className="answer">{question.answer}</div>
            </Card>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questionData.questions,
});

SurveySuccess.propTypes = {
  questions: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(SurveySuccess));
