import { Action } from 'redux';
import { RequestError } from 'utils/error';

export interface AsyncAction<T = any, R = undefined> extends Action<T> {
  result?: R;
  error?: RequestError;
}
