import auth from '@src/services/auth';
import { history } from '@state/store';
import { Thunk } from '@state/types/thunk';
import { AuthActionName } from './types';
import { Auth0DecodedHash } from 'auth0-js';

export const login = (location?: string): Thunk => dispatch => {
  dispatch({ type: AuthActionName.LOGIN, location });
  auth.login();
};

export const handleAuth = (): Thunk => async (dispatch, getState) => {
  const location = getState().auth.location || '/';
  try {
    const decodedHash = await auth.parseHash();
    dispatch(setSession(decodedHash));
    history.push(location);
  } catch (error) {
    history.push(location);
    // show error modal
  }
};

export const setSession = (decodedHash: Auth0DecodedHash): Thunk => dispatch => {
  const { expiresIn, accessToken, idToken } = decodedHash;
  const expiresAt = expiresIn! * 1000 + new Date().getTime();
  dispatch(scheduleRenewal(expiresAt));
  dispatch({
    type: AuthActionName.SET_SESSION,
    accessToken: accessToken!,
    idToken: idToken!,
    expiresAt
  });
};

export const renewSession = (): Thunk => async dispatch => {
  try {
    const decodedHash = await auth.checkSession();
    dispatch(setSession(decodedHash));
  } catch (error) {
    dispatch(logout());
  }
};

let renewalTimer: NodeJS.Timeout;
export const scheduleRenewal = (expiresAt: number): Thunk => dispatch => {
  const timeout = expiresAt - Date.now();
  if (timeout > 0) {
    renewalTimer = setTimeout(() => dispatch(renewSession()), timeout);
  }
};

export const logout = (location?: string): Thunk => dispatch => {
  clearTimeout(renewalTimer);
  dispatch({ type: AuthActionName.LOGOUT });
  auth.logout(location);
};
