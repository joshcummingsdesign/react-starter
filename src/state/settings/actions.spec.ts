import { changeLanguage } from './actions';
import { SettingsActionName } from './types';

describe('settings actions', () => {
  it('changeLanguage(): should create CHANGE_LANGUAGE action', () => {
    const locale = 'en-US';

    const expectedAction = {
      type: SettingsActionName.CHANGE_LANGUAGE,
      locale,
    };

    expect(changeLanguage(locale)).toEqual(expectedAction);
  });
});
