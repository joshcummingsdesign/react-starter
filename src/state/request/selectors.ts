import _ from 'lodash';
import { RootAction } from '@state/root';
import { LoadingState } from './loading';
import { ErrorState } from './error';
import { getErrorMessage } from '@state/utils/asyncError';

/**
 * Create a selector for retrieving loading states by action names.
 */
export const createLoadingSelector = (actions: RootAction['type'][]) => (state: LoadingState) =>
  _(actions).some(action => !!state.find(request => request.requestAction.type === action));

/**
 * Create a selector for retrieving error states by action names.
 *
 * Returns the first error as we can assume this is what we want to display to the user.
 */
export const createErrorSelector = (actions: RootAction['type'][]) => (state: ErrorState) =>
  _(actions)
    .map(action => {
      const request = state.find(request => request.requestAction.type === action);
      if (request && request.error) {
        return getErrorMessage(request.error);
      }
      return null;
    })
    .compact()
    .first() || '';
