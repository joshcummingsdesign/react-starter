import { Action } from 'redux';
import { Auth0DecodedHash } from 'auth0-js';

export enum AuthActionName {
  START_LOGIN = 'START_LOGIN',
  FINISH_LOGIN = 'FINISH_LOGIN'
}

export interface StartLoginAction extends Action<AuthActionName.START_LOGIN> {
  location?: string;
}

export interface FinishLoginAction extends Action<AuthActionName.FINISH_LOGIN> {
  decodedHash: Auth0DecodedHash;
}

export type AuthAction = StartLoginAction | FinishLoginAction;
