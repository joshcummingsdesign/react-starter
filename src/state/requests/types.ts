import { Action } from 'redux';
import { AxiosError } from 'axios';
import { AsyncAction } from '@state/types/actions';

export type RequestError = AxiosError | Error;

export enum RequestsActionName {
  START_REQUEST = 'START_REQUEST',
  FINISH_REQUEST = 'FINISH_REQUEST'
}

export interface StartRequestAction extends Action<RequestsActionName.START_REQUEST> {
  requestId: number;
  requestAction: AsyncAction<any, any>;
}

export interface FinishReqeustAction extends Action<RequestsActionName.FINISH_REQUEST> {
  requestId: number;
  error?: RequestError;
}

export type RequestsAction = StartRequestAction | FinishReqeustAction;
