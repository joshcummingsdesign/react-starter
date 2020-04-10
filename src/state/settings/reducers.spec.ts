import requests from './reducers';
import { SettingsActionName } from './types';
import { SettingsState } from '.';

describe('settings reducers', () => {
  const locale: any = 'ja-JP';
  const initialState: SettingsState = {
    locale: 'en-US',
  };

  it('should return the initial state', () => {
    expect(requests(initialState, {} as any)).toEqual(initialState);
  });

  it('should handle CHANGE_LANGUAGE', () => {
    expect(
      requests(initialState, {
        type: SettingsActionName.CHANGE_LANGUAGE,
        locale,
      })
    ).toEqual({
      locale,
    });
  });
});
