import { AuthState } from '.';

export const isAuthenticated = (state: AuthState) => {
  const { expiresAt } = state.tokens;
  return !!expiresAt && new Date().getTime() < expiresAt;
};
