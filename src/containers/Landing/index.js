import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Landing.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-screen">
        <div className="content">
          <h1>Simple Survey</h1>
          <div>
            <Button to="/">START SURVEY</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
