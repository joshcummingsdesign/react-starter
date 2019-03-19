import auth from '@src/services/auth';
import { history } from '@state/store';
import { Thunk } from '@state/types/thunk';
import { AuthActionName } from './types';

export const login = (location?: string): Thunk => dispatch => {
  dispatch({ type: AuthActionName.START_LOGIN, location });
  auth.login();
};

export const finishLogin = (): Thunk => async (dispatch, getState) => {
  const location = getState().auth.location || '/';
  try {
    const decodedHash = await auth.parseHash();
    if (decodedHash) {
      dispatch({ type: AuthActionName.FINISH_LOGIN, decodedHash, location });
      history.push(location);
    } else {
      history.push(location);
    }
  } catch (error) {
    dispatch({ type: AuthActionName.LOGIN_ERROR, error });
  }
};

export const logout = (location?: string): Thunk => (dispatch, getState) => {
  dispatch({ type: AuthActionName.LOGOUT, location });
  history.push(location || getState().auth.location || '/');
};
