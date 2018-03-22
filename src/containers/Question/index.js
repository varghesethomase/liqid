import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import './Question.css';

class Question extends Component {
  render() {
    return (
      <div className="question-view">
        <Header />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeSelectedCrust: value => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
