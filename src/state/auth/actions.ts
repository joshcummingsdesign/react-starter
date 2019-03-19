import auth from '@src/services/auth';
import { Thunk } from '@state/types/thunk';
import { AuthActionName, FinishLoginAction } from './types';
import { Auth0DecodedHash } from 'auth0-js';

export const login = (location?: string): Thunk => dispatch => {
  dispatch({ type: AuthActionName.START_LOGIN, location });
  auth.login();
};

export const finishLogin = (decodedHash: Auth0DecodedHash): FinishLoginAction => ({
  type: AuthActionName.FINISH_LOGIN,
  decodedHash
});

export const logout = (): Thunk => () => console.log('logout');
