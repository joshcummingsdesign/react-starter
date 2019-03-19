import { RequestsState } from '.';
import { RootAction } from '@state/root';
import { getErrorMessage } from '../utils/asyncError';

/**
 * Retrieve loading state by action name.
 */
export const loadingSelector = (state: RequestsState, actions: RootAction['type'][]) => {
  for (let i = 0; i < actions.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const action = actions[i];
      const request = state[j];
      if (request.requestAction.type === action && !request.error) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Retrieve fist error message by action name.
 */
export const errorSelector = (state: RequestsState, actions: RootAction['type'][]) => {
  for (let i = 0; i < actions.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const action = actions[i];
      const request = state[j];
      if (request.requestAction.type === action && request.error) {
        return getErrorMessage(request.error);
      }
    }
  }
  return '';
};
