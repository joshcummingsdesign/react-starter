import { RootAction } from 'state/root';
import { Thunk, Dispatch } from 'state/types/thunk';
import { startRequest, finishRequest } from 'state/requests/actions';

let requestCounter = 0;

/**
 * Asynchronous request action.
 * Dispatches start and finish actions when a request is made.
 * Each request is tracked by a monotonically-increasing identifier.
 */
export const request = <R, A extends RootAction>(thunk: Thunk<Promise<R>>, action: A) => async (
  dispatch: Dispatch
) => {
  // Don't increase requestId in test environment as to not create side effects.
  if (process.env.NODE_ENV !== 'test') {
    requestCounter = requestCounter + 1;
  }
  const requestId = requestCounter;

  dispatch(startRequest(requestId, action));

  try {
    const result = await dispatch(thunk);
    dispatch({ ...action, result });
    dispatch(finishRequest(requestId));
    return result;
  } catch (error) {
    dispatch({ ...action, error });
    dispatch(finishRequest(requestId, error));
  }
};

export default request;
