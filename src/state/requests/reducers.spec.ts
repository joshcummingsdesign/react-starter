import requests from './reducers';
import { RequestsActionName } from './types';
import { RequestsState } from '.';

describe('requests reducers', () => {
  const initialState: RequestsState = [];
  const requestId = 1;
  const requestAction = { type: 'TEST_ACTION' };

  it('should return the initial state', () => {
    expect(requests(initialState, {} as any)).toEqual(initialState);
  });

  it('should handle START_REQUEST', () => {
    expect(
      requests(initialState, {
        type: RequestsActionName.START_REQUEST,
        requestId,
        requestAction,
      })
    ).toEqual([
      {
        requestId,
        requestAction,
      },
    ]);
  });

  it('should handle FINISH_REQUEST', () => {
    expect(
      requests([{ requestId, requestAction }], {
        type: RequestsActionName.FINISH_REQUEST,
        requestId,
      })
    ).toEqual([]);
  });
});
