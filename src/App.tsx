import React, { SFC, Children } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@state/store';

import HomePage from './views/pages/HomePage';
import PostsPage from './views/pages/PostsPage';

const Providers: SFC = ({ children }) => (
  <Provider store={store}>{Children.only(children)}</Provider>
);

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/posts' component={PostsPage} />
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
