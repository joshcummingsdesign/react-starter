import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestActions } from 'utils/test';
import { Dispatch } from 'state/types/thunk';
import request from '.';

const mockStore = configureMockStore<{}, Dispatch>([thunk]);

describe('post actions', () => {
  let store: MockStoreEnhanced<{}, Dispatch>;
  const expectedAction = 'TEST_ACTION';

  beforeEach(() => {
    store = mockStore();
  });

  it('request(): should start and finish request and return result', async () => {
    const expectedResult = 'foobar';
    const expectedActions = requestActions(expectedAction, { result: expectedResult });

    const asyncAction = () =>
      request(() => Promise.resolve(expectedResult), {
        type: expectedAction,
      } as any);

    const result = await store.dispatch(asyncAction());

    expect(result).toEqual(expectedResult);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('request(): should start and finish request and throw error', async () => {
    const error = new Error();
    const expectedActions = requestActions(expectedAction, {}, error);

    const asyncAction = () =>
      request(() => Promise.reject(error), {
        type: expectedAction,
      } as any);

    const result = await store.dispatch(asyncAction());

    expect(result).toEqual(undefined);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
