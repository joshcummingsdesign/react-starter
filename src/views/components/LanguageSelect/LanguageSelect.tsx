import React from 'react';
import { LocaleState, langs, locales } from 'views/components/providers/LocaleProvider';

interface ILanguageSelect {
  locale: LocaleState;
  onChangeLanguage: (language: LocaleState) => void;
}

const LanguageSelect = ({ locale, onChangeLanguage }: ILanguageSelect) => (
  <select
    data-testid='language-select'
    value={locale}
    onChange={(e) => onChangeLanguage(e.currentTarget.value as LocaleState)}>
    {locales.map((language) => (
      <option key={language} value={language}>
        {langs[language].name}
      </option>
    ))}
  </select>
);

export default LanguageSelect;
