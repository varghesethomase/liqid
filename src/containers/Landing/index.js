import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import './Landing.css';

class LandingPage extends Component {
  startSurvey = () => {
    this.props.history.push(`/questions/${this.props.firstQuestionID}`);
  };
  render() {
    return (
      <div className="landing-screen">
        <div className="content">
          <h1>Simple Survey</h1>
          <div>
            <Button onClick={this.startSurvey}>START SURVEY</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstQuestionID: state.question.questionData.questions[0].id
});

export default connect(mapStateToProps, null)(LandingPage);
