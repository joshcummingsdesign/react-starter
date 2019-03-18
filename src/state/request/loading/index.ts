import { AsyncAction } from '@state/types/actions';

export type LoadingState = {
  requestId: number;
  requestAction: AsyncAction<any, any>;
}[];
