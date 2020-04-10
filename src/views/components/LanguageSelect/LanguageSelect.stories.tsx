import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LanguageSelect from '.';

const actions = {
  onChangeLanguage: action('onChangeLanguage'),
};

storiesOf('components/LanguageSelect', module).add('default', () => (
  <LanguageSelect locale='en-US' onChangeLanguage={actions.onChangeLanguage} />
));
