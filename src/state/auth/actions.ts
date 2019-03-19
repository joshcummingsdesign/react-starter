import auth from '@src/services/auth';
import { history } from '@state/store';
import { Thunk } from '@state/types/thunk';
import { AuthActionName, AuthAction } from './types';
import { Auth0DecodedHash } from 'auth0-js';

export const login = (location?: string): Thunk => dispatch => {
  dispatch({ type: AuthActionName.LOGIN, location });
  auth.login();
};

export const finishLogin = (): Thunk => async (dispatch, getState) => {
  const location = getState().auth.location || '/';
  try {
    const decodedHash = await auth.parseHash();
    if (decodedHash) {
      dispatch(startSession(decodedHash));
      history.push(location);
    } else {
      // No data
    }
  } catch (error) {
    // Error
  }
};

export const startSession = (decodedHash: Auth0DecodedHash): AuthAction => {
  const { expiresIn } = decodedHash;
  const expiresAt = expiresIn && expiresIn * 1000 + new Date().getTime();
  return {
    type: AuthActionName.START_SESSION,
    decodedHash,
    expiresAt
  };
};

export const checkSession = (): Thunk => (dispatch, getState) => {
  const { expiresAt } = getState().auth.tokens;
  const expiresIn = expiresAt && expiresAt - Date.now();
  dispatch({
    type: AuthActionName.CHECK_SESSION,
    expiresIn
  });
};

export const renewSession = (): Thunk => async dispatch => {
  try {
    const decodedHash = await auth.checkSession();
    if (decodedHash) {
      dispatch(startSession(decodedHash));
    } else {
      // No data
    }
  } catch (error) {
    // Error
  }
};

export const logout = (location?: string): Thunk => (dispatch, getState) => {
  dispatch({ type: AuthActionName.LOGOUT, location });
  history.push(location || getState().auth.location || '/');
};
