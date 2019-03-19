import React, { SFC, Children } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '@state/store';

import ProtectedRoute from '@components/route/ProtectedRoute';

import HomePage from '@pages/HomePage';
import AuthCallbackPage from '@pages/AuthCallbackPage';
import ProfilePage from '@pages/ProfilePage';

const Providers: SFC = ({ children }) => (
  <Provider store={store}>{Children.only(children)}</Provider>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/callback' component={AuthCallbackPage} />
    <ProtectedRoute exact path='/profile' component={ProfilePage} />
  </Switch>
);

const App = () => (
  <Providers>
    <Router>
      <Routes />
    </Router>
  </Providers>
);

export default App;
