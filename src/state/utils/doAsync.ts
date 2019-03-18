import { Thunk, Dispatch } from '@state/types/thunk';
import { startRequest, finishRequest } from '@state/request/actions';
import { RootAction } from '@state/root';

let requestCounter = 0;

/**
 * Dispatches actions when API requests start and end.
 *
 * Each request is tracked by a monotonically increasing identifier.
 *
 * @param thunk Async thunk
 * @param action Async action
 */
export const doAsync = <R, A extends RootAction>(thunk: Thunk<R>, action: A): Thunk => async (
  dispatch: Dispatch
) => {
  const requestId = requestCounter + 1;
  requestCounter = requestId;

  dispatch(startRequest(requestId, action));

  try {
    const result = await dispatch(thunk);
    dispatch({ ...action, result });
    dispatch(finishRequest(requestId));
  } catch (error) {
    dispatch({ ...action, error });
    dispatch(finishRequest(requestId, error));
  }
};
