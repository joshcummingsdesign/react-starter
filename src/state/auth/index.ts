export interface AuthState {
  tokens: {
    accessToken?: string;
    idToken?: string;
    expiresAt?: number;
  };
  location?: string;
  error?: Error;
}
