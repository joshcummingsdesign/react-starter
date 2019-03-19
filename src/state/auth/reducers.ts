import { AuthState } from '.';
import { AuthAction, AuthActionName } from './types';

const initialState = {
  tokens: {}
};

const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionName.START_LOGIN: {
      const { location } = action;
      return { ...initialState, location };
    }

    case AuthActionName.FINISH_LOGIN: {
      const { accessToken, idToken, expiresIn } = action.decodedHash;
      return {
        ...state,
        tokens: {
          accessToken,
          idToken,
          expiresAt: expiresIn && expiresIn * 1000 + new Date().getTime()
        }
      };
    }
  }

  return state;
};

export default auth;
