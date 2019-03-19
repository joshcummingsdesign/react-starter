import { AuthState } from '.';

export const getExpiryTime = (state: AuthState) => state.tokens.expiresIn || 0;

export const isAuthenticated = (state: AuthState) => {
  const expiresIn = getExpiryTime(state);
  return expiresIn > 0;
};
