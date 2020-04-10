import { SettingsState } from '.';
import { SettingsAction, SettingsActionName } from './types';
import { DEFAULT_LANG } from 'views/components/providers/LocaleProvider';

const initalState: SettingsState = {
  locale: DEFAULT_LANG,
};

const settings = (state: SettingsState = initalState, action: SettingsAction): SettingsState => {
  switch (action.type) {
    case SettingsActionName.CHANGE_LANGUAGE: {
      return { ...state, locale: action.locale };
    }

    default: {
      return state;
    }
  }
};

export default settings;
