import { LocaleState } from '.';
import { LocaleAction, LocaleActionName } from './types';

const initalState: LocaleState = {
  lang: 'en'
};

const locale = (state: LocaleState = initalState, action: LocaleAction): LocaleState => {
  switch (action.type) {
    case LocaleActionName.CHANGE_LANGUAGE: {
      return { ...state, lang: action.lang };
    }
  }

  return state;
};

export default locale;
