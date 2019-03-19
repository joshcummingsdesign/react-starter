import { Action } from 'redux';
import { Auth0DecodedHash } from 'auth0-js';

export enum AuthActionName {
  START_LOGIN = 'START_LOGIN',
  FINISH_LOGIN = 'FINISH_LOGIN',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT'
}

export interface StartLoginAction extends Action<AuthActionName.START_LOGIN> {
  location?: string;
}

export interface FinishLoginAction extends Action<AuthActionName.FINISH_LOGIN> {
  decodedHash: Auth0DecodedHash;
}

export interface LoginErrorAction extends Action<AuthActionName.LOGIN_ERROR> {
  error: Error;
}

export interface LogoutAction extends Action<AuthActionName.LOGOUT> {
  location?: string;
}

export type AuthAction = StartLoginAction | FinishLoginAction | LoginErrorAction | LogoutAction;
