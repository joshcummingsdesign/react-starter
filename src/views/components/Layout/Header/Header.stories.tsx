import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './Header';

const actions = {
  login: action('login'),
  logout: action('logout')
};

storiesOf('components/Layout/Header', module)
  .add('logged out', () => (
    <Header isAuthenticated={false} login={actions.login} logout={actions.logout} />
  ))
  .add('logged in', () => (
    <Header isAuthenticated={true} login={actions.login} logout={actions.logout} />
  ));
