import { ReqeustError } from './error/types';
import { AsyncAction } from '@state/types/actions';
import { RequestAction, RequestActionName } from './types';

export const startRequest = (
  requestId: number,
  requestAction: AsyncAction<any, any>
): RequestAction => ({
  type: RequestActionName.START_REQUEST,
  requestId,
  requestAction
});

export const finishRequest = (requestId: number, error?: ReqeustError): RequestAction => ({
  type: RequestActionName.FINISH_REQUEST,
  requestId,
  error
});
