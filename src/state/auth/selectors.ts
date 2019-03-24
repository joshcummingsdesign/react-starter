import { AuthState } from '.';

export const isAuthenticated = (state: AuthState) => {
  const expiresAt = state.tokens && state.tokens.expiresAt;
  return !!expiresAt && new Date().getTime() < expiresAt;
};
