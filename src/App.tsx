import React, { SFC, Children } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import store, { persistor, history } from '@state/store';

import AuthProvider from '@components/auth/AuthProvider';
import ProtectedRoute from '@components/auth/ProtectedRoute';
import LoginPage from '@pages/auth/LoginPage';
import AuthCallbackPage from '@pages/auth/AuthCallbackPage';

import HomePage from '@pages/HomePage';
import ProfilePage from '@pages/ProfilePage';
import PageNotFound from '@pages/PageNotFound';

const Providers: SFC = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <AuthProvider>{Children.only(children)}</AuthProvider>
      </Router>
    </PersistGate>
  </Provider>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/login' component={LoginPage} />
    <Route exact path='/login/callback' component={AuthCallbackPage} />
    <ProtectedRoute exact path='/profile' component={ProfilePage} />
    <Route component={PageNotFound} />
  </Switch>
);

const App = () => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
