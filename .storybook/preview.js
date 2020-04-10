import React from 'react';
import { Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { createMemoryHistory } from 'history';

import languages from 'locale/localeData/data.json';

const history = createMemoryHistory();

history.push = action('history.push');
history.replace = action('history.replace');
history.go = action('history.go');
history.goBack = action('history.goBack');
history.goForward = action('history.goForward');

addDecorator((story) => (
  <IntlProvider locale='en-US' messages={languages['en-US']}>
    <Router history={history}>{story()}</Router>
  </IntlProvider>
));
