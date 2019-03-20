import { AuthState } from '.';
import { AuthAction, AuthActionName } from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  tokens: {}
};

const auth = (state = initialState, action: AuthAction): AuthState => {
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
      return initialState;
    }
  }

  return state;
};

export default auth;
