import React, { SFC, Children } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store, { persistor } from '@state/store';

import ProtectedRoute from '@components/route/ProtectedRoute';

import HomePage from '@pages/HomePage';
import AuthCallbackPage from '@pages/AuthCallbackPage';
import ProfilePage from '@pages/ProfilePage';

const Providers: SFC = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {Children.only(children)}
    </PersistGate>
  </Provider>
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
