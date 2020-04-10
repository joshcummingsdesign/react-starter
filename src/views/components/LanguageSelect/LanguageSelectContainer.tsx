import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'state/root';
import { LocaleState } from 'views/components/providers/LocaleProvider';
import { changeLanguage } from 'state/settings/actions';
import LanguageSelect from '.';

const LanguageSelectContainer = () => {
  const dispatch = useDispatch();

  const { locale } = useSelector((state: RootState) => state.settings);

  const _handleChangeLanguage = (language: LocaleState) => dispatch(changeLanguage(language));

  return <LanguageSelect locale={locale} onChangeLanguage={_handleChangeLanguage} />;
};

export default LanguageSelectContainer;
