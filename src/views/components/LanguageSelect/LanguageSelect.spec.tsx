import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';
import { render, fireEvent, testMessages } from 'utils/test';
import { DEFAULT_LANG, locales } from 'views/components/providers/LocaleProvider';
import LanguageSelect from './LanguageSelectContainer';

const LanguageElement = () => {
  const intl = useIntl();
  return <p data-testid='language-message'>{intl.formatMessage(testMessages.message)}</p>;
};

const renderComponent = () =>
  render(
    <Fragment>
      <LanguageSelect />
      <LanguageElement />
    </Fragment>
  );

describe('LanguageSelect', () => {
  it('should show all language options', () => {
    const { getByTestId } = renderComponent();
    const options = getByTestId('language-select').querySelectorAll('option');
    expect(options.length).toEqual(locales.length);
  });

  it('should change language', async () => {
    const { getByTestId } = renderComponent();

    const locale = locales[1];
    const select = getByTestId('language-select');
    const message = getByTestId('language-message');

    expect(select).toHaveValue(DEFAULT_LANG);
    expect(message).toHaveTextContent('This is a test message.');

    fireEvent.change(select, { target: { value: locale } });

    expect(select).toHaveValue(locale);
    expect(message).toHaveTextContent('This is a test message in japanese.');
  });
});
