import { RequestsState } from '.';
import { RootAction } from '@state/root';

/**
 * Retrieve loading state by action name.
 */
export const loadingSelector = (state: RequestsState, actions: RootAction['type'][]) => {
  for (let i = 0; i < actions.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const request = state[j];
      const action = actions[i];
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
      const request = state[j];
      const action = actions[i];
      if (request.requestAction.type === action && request.error) {
        return request.error.message;
      }
    }
  }
  return '';
};
