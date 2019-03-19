import { AuthState } from '.';
import { AuthAction, AuthActionName } from './types';

const initialState = {
  tokens: {}
};

const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionName.LOGIN: {
      const { location } = action;
      return { ...initialState, location };
    }

    case AuthActionName.START_SESSION: {
      return {
        ...state,
        tokens: { ...action.decodedHash, expiresAt: action.expiresAt }
      };
    }

    case AuthActionName.CHECK_SESSION: {
      return {
        ...state,
        tokens: { ...state.tokens, expiresIn: action.expiresIn || state.tokens.expiresIn }
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
