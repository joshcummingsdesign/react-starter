import { AuthState } from '.';
import { AuthAction, AuthActionName } from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  tokens: null
};

const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionName.LOGIN: {
      const { location } = action;
      return { ...initialState, location };
    }

    case AuthActionName.SET_SESSION: {
      const { expiresAt, accessToken, idToken } = action;
      return {
        ...state,
        isLoggedIn: true,
        tokens: { expiresAt, accessToken, idToken }
      };
    }

    case AuthActionName.LOGOUT: {
      const { location } = action;
      return { ...initialState, location };
    }
  }

  return state;
};

export default auth;
