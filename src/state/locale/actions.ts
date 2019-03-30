import { ChangLanguageAction, LocaleActionName } from './types';

export const changeLanguage = (lang: string): ChangLanguageAction => ({
  type: LocaleActionName.CHANGE_LANGUAGE,
  lang
});
