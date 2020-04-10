import { Action } from 'redux';
import { LocaleState } from 'views/components/providers/LocaleProvider';

export enum SettingsActionName {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

export interface ChangLanguageAction extends Action<SettingsActionName.CHANGE_LANGUAGE> {
  locale: LocaleState;
}

export type SettingsAction = ChangLanguageAction;
