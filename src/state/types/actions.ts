import { Action } from 'redux';
import { ReqeustError } from '@state/request/error/types';

export interface AsyncAction<T = any, R = undefined> extends Action<T> {
  result?: R;
  error?: ReqeustError;
}
