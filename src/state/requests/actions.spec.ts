import { startRequest, finishRequest } from './actions';
import { RequestsActionName } from './types';

describe('requests actions', () => {
  it('startRequest(): should create START_REQUEST action', () => {
    const requestId = 1;
    const requestAction = { type: 'TEST_ACTION' };

    const expectedAction = {
      type: RequestsActionName.START_REQUEST,
      requestId,
      requestAction,
    };

    expect(startRequest(requestId, requestAction)).toEqual(expectedAction);
  });

  it('finishRequest(): should create FINISH_REQUEST action', () => {
    const requestId = 1;
    const error = undefined;

    const expectedAction = {
      type: RequestsActionName.FINISH_REQUEST,
      requestId,
      error,
    };

    expect(finishRequest(requestId, error)).toEqual(expectedAction);
  });
});
