import { Action } from 'redux';

export enum LocaleActionName {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}

export interface ChangLanguageAction extends Action<LocaleActionName.CHANGE_LANGUAGE> {
  lang: string;
}

export type LocaleAction = ChangLanguageAction;
