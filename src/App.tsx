import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from 'state/store';
import LocaleProvider from 'views/components/providers/LocaleProvider';

import HomePage from 'views/pages/HomePage/HomePageContainer';
import PageNotFound from 'views/pages/PageNotFound/PageNotFoundContainer';

const Providers: FC = ({ children }) => (
  <Provider store={store}>
    <LocaleProvider>
      <Router>{children}</Router>
    </LocaleProvider>
  </Provider>
);

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route component={PageNotFound} />
  </Switch>
);

const App = () => (
  <Providers>
    <Routes />
  </Providers>
);

export default App;
