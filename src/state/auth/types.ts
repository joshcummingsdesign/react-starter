import { Action } from 'redux';

export enum AuthActionName {
  LOGIN = 'LOGIN',
  SET_SESSION = 'SET_SESSION',
  LOGOUT = 'LOGOUT'
}

export interface LoginAction extends Action<AuthActionName.LOGIN> {
  location?: string;
}

export interface SetSessionAction extends Action<AuthActionName.SET_SESSION> {
  expiresAt: number;
  accessToken: string;
  idToken: string;
}

export interface LogoutAction extends Action<AuthActionName.LOGOUT> {
  location?: string;
}

export type AuthAction = LoginAction | SetSessionAction | LogoutAction;
