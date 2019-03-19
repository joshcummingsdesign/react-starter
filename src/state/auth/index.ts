export interface AuthState {
  tokens: {
    accessToken?: string;
    idToken?: string;
    expiresAt?: number;
    expiresIn?: number;
  };
  location?: string;
  errorMessage?: string;
}
