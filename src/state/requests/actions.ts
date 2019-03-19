import { RequestError } from './types';
import { AsyncAction } from '@state/types/actions';
import { RequestsAction, RequestsActionName } from './types';

export const startRequest = (
  requestId: number,
  requestAction: AsyncAction<any, any>
): RequestsAction => ({
  type: RequestsActionName.START_REQUEST,
  requestId,
  requestAction
});

export const finishRequest = (requestId: number, error?: RequestError): RequestsAction => ({
  type: RequestsActionName.FINISH_REQUEST,
  requestId,
  error
});
