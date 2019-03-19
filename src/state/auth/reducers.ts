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
      const { expiresAt, expiresIn } = action;
      return {
        ...state,
        tokens: { ...action.decodedHash, expiresAt, expiresIn },
        errorMessage: undefined
      };
    }

    case AuthActionName.CHECK_SESSION: {
      const expiresIn = action.expiresIn || state.tokens.expiresIn;
      return {
        ...state,
        tokens: { ...state.tokens, expiresIn },
        errorMessage: undefined
      };
    }

    case AuthActionName.LOGOUT: {
      const { location } = action;
      return { ...initialState, location };
    }

    case AuthActionName.AUTH_ERROR: {
      const { errorMessage } = action;
      return { ...state, errorMessage };
    }
  }

  return state;
};

export default auth;
