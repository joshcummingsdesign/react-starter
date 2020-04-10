import { AsyncAction } from 'state/types/actions';
import { RequestError } from 'utils/error';

export type RequestsState = {
  requestId: number;
  requestAction: AsyncAction<any, any>;
  error?: RequestError;
}[];
