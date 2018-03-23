import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';
import QuestionTypography from '../../components/QuestionTypography';
import './Question.css';

class Question extends Component {
  render() {
    return (
      <div className="question-view">
        <Header />
        <div class="question-wrapper">
          <QuestionCard>
            <QuestionTypography />
          </QuestionCard>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeSelectedCrust: value => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
