import { Thunk, Dispatch } from '@state/types/thunk';
import { startRequest, finishRequest } from '@state/requests/actions';
import { RootAction } from '@state/root';

let requestCounter = 0;

/**
 * Asynchronous request action.
 * Dispatches start and finish actions when a request is made.
 * Each request is tracked by a monotonically increasing identifier.
 */
export const request = <R, A extends RootAction>(thunk: Thunk<R>, action: A): Thunk<any> => async (
  dispatch: Dispatch
) => {
  const requestId = requestCounter + 1;
  requestCounter = requestId;

  dispatch(startRequest(requestId, action));

  try {
    const result = await dispatch(thunk);
    dispatch({ ...action, result });
    dispatch(finishRequest(requestId));
    return result;
  } catch (error) {
    dispatch({ ...action, error });
    dispatch(finishRequest(requestId, error));
    throw error;
  }
};
