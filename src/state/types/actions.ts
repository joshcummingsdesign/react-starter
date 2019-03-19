import { Action } from 'redux';
import { ReqeustError } from '@state/requests/types';

export interface AsyncAction<T = any, R = undefined> extends Action<T> {
  result?: R;
  error?: ReqeustError;
}
