import { ChangLanguageAction, SettingsActionName } from './types';
import { LocaleState } from 'views/components/providers/LocaleProvider';

export const changeLanguage = (locale: LocaleState): ChangLanguageAction => ({
  type: SettingsActionName.CHANGE_LANGUAGE,
  locale,
});
