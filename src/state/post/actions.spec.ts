import { requestActions, waitForStateChange } from 'utils/test';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'state/root';
import { getPosts } from './actions';
import { PostAction, PostActionName } from './types';
import api from 'services/api';
import { posts } from '__fixtures__/post';

jest.mock('state/root');

type DispatchExts = ThunkDispatch<RootState, undefined, PostAction>;

const mockStore = configureMockStore<Partial<RootState>, DispatchExts>([thunk]);

describe('post actions', () => {
  let store: MockStoreEnhanced<Partial<RootState>, DispatchExts>;
  beforeEach(() => {
    store = mockStore({
      post: { posts: [] },
    });
  });

  it('getPosts(): should create GET_POSTS action', async () => {
    jest.spyOn(api, 'getPosts').mockResolvedValue({
      data: posts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const expectedActions = requestActions(PostActionName.GET_POSTS, { result: posts });

    store.dispatch(getPosts());

    await waitForStateChange(store, () => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
