import { ReqeustError } from './types';
import { AsyncAction } from '@state/types/actions';

export type ErrorState = {
  requestId: number;
  requestAction: AsyncAction<any, any>;
  error: ReqeustError | null;
}[];
