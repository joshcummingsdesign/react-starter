import { spyOnWithContext, requestActions, waitForStateChange } from 'utils/test';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { range } from 'lodash';
import { RootState } from 'state/root';
import { getPosts } from './actions';
import { PostAction, PostActionName } from './types';
import { Post } from 'models/Post';
import api from 'services/api';
import { posts } from '__fixtures__/post';

type DispatchExts = ThunkDispatch<RootState, undefined, PostAction>;

const mockStore = configureMockStore<Partial<RootState>, DispatchExts>([thunk]);

describe('post actions', () => {
  let store: MockStoreEnhanced<Partial<RootState>, DispatchExts>;
  beforeEach(() => {
    store = mockStore({
      post: { posts: [] },
    });
  });

  it('getPosts(): should request posts and create GET_POSTS action', async () => {
    spyOnWithContext(api, 'getPosts').mockResolvedValue({
      data: posts,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const result: Post[] = range(0, 4).map(() => ({
      id: expect.any(Number),
      userId: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    }));

    const expectedActions = requestActions(PostActionName.GET_POSTS, { result });

    store.dispatch(getPosts());

    await waitForStateChange(store, () => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
