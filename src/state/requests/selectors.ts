import { RootAction } from 'state/root';
import { RequestsState } from '.';
import _ from 'lodash';
import { RequestError } from 'utils/error';

/**
 * Retrieve loading state by action name.
 */
export const loadingSelector = (state: RequestsState, actions: RootAction['type'][]) =>
  _(actions).some(
    (action) => !!state.find((request) => request.requestAction.type === action && !request.error)
  );

/**
 * Retrieve fist error message by action name.
 */
export const errorSelector = (
  state: RequestsState,
  actions: RootAction['type'][]
): RequestError | undefined => {
  for (let i = 0; i < actions.length; i++) {
    for (let j = 0; j < state.length; j++) {
      const action = actions[i];
      const request = state[j];
      if (request.requestAction.type === action && request.error) {
        return request.error;
      }
    }
  }
};
