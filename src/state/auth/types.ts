import { Action } from 'redux';
import { Auth0DecodedHash } from 'auth0-js';

export enum AuthActionName {
  LOGIN = 'LOGIN',
  START_SESSION = 'START_SESSION',
  CHECK_SESSION = 'CHECK_SESSION',
  LOGOUT = 'LOGOUT',
  AUTH_ERROR = 'AUTH_ERROR'
}

export interface LoginAction extends Action<AuthActionName.LOGIN> {
  location?: string;
}

export interface StartSessionAction extends Action<AuthActionName.START_SESSION> {
  decodedHash: Auth0DecodedHash;
  expiresAt?: number;
  expiresIn?: number;
}

export interface CheckSessionAction extends Action<AuthActionName.CHECK_SESSION> {
  expiresIn?: number;
}

export interface LogoutAction extends Action<AuthActionName.LOGOUT> {
  location?: string;
}

export interface AuthErrorAction extends Action<AuthActionName.AUTH_ERROR> {
  errorMessage: string;
}

export type AuthAction =
  | LoginAction
  | StartSessionAction
  | CheckSessionAction
  | LogoutAction
  | AuthErrorAction;
