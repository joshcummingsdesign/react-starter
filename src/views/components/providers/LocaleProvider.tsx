import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { RootState } from 'state/root';
import languages from 'locale/localeData/data.json';

/**
 * The app's supported languages.
 */
export const langs = {
  'en-US': {
    name: 'English',
  },
  'ja-JP': {
    name: 'Japanese',
  },
};

export type LocaleState = keyof typeof langs;

export const locales = Object.keys(langs) as LocaleState[];

/**
 * The app's default language.
 */
export const DEFAULT_LANG: LocaleState = 'en-US';

/**
 * Provides multi-lingual support for the application.
 */
const LocaleProvider: FC = ({ children }) => {
  const { locale } = useSelector((state: RootState) => state.settings);
  return (
    <IntlProvider locale={locale} messages={languages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
