import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Question.css';

class Question extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changeSelectedCrust: value => dispatch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
