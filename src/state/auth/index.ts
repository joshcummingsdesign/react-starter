export interface AuthState {
  isLoggedIn: boolean;
  location?: string;
  tokens: {
    expiresAt?: number;
    accessToken?: string;
    idToken?: string;
  };
}
