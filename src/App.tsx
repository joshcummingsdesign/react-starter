import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './views/pages/HomePage';
import PostsPage from './views/pages/PostsPage';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/posts' component={PostsPage} />
  </Switch>
);

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
