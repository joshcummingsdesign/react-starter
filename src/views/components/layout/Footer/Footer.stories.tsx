import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LanguageSelect from 'views/components/LanguageSelect';
import Footer from '.';

const actions = {
  onChangeLanguage: action('onChangeLanguage'),
};

storiesOf('components/layout/Footer', module).add('default', () => (
  <Footer
    renderLangaugeSelect={() => (
      <LanguageSelect locale='en-US' onChangeLanguage={actions.onChangeLanguage} />
    )}
  />
));
