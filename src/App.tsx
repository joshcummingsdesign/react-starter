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

const Providers: SFC = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {Children.only(children)}
    </PersistGate>
  </Provider>
);

const Routes = () => (
  <AuthProvider>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/callback' component={AuthCallbackPage} />
      <ProtectedRoute exact path='/profile' component={ProfilePage} />
    </Switch>
  </AuthProvider>
);

const App = () => (
  <Providers>
    <Router history={history}>
      <Routes />
    </Router>
  </Providers>
);

export default App;
