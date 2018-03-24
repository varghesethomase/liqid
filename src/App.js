import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import asyncComponent from './components/AsyncComponent';
import './App.css';

const AsyncLanding = asyncComponent(() => import('./containers/Landing'));
const AsyncQuestion = asyncComponent(() => import('./containers/Question'));
const AsyncSurveySuccess = asyncComponent(() =>
  import('./containers/SurveySuccess')
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app-wrapper">
            <Route exact path="/" component={AsyncLanding} />
            <Route exact path="/question/:id" component={AsyncQuestion} />
            <Route
              exact
              path="/survey-success"
              component={AsyncSurveySuccess}
            />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
