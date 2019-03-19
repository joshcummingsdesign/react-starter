import { AsyncAction } from '@state/types/actions';
import { ReqeustError } from './types';

export type RequestsState = {
  requestId: number;
  requestAction: AsyncAction<any, any>;
  error?: ReqeustError;
}[];
