import { Action } from 'redux';
import { AsyncAction } from '@state/types/actions';

export enum RequestActionName {
  START_REQUEST = 'START_REQUEST',
  FINISH_REQUEST = 'FINISH_REQUEST'
}

export interface StartRequestAction extends Action<RequestActionName.START_REQUEST> {
  requestId: number;
  requestAction: AsyncAction<any, any>;
}

export interface FinishReqeustAction extends Action<RequestActionName.FINISH_REQUEST> {
  requestId: number;
  error: any;
}

export type RequestAction = StartRequestAction | FinishReqeustAction;
