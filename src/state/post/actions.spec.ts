import { spyOnWithContext, requestActions } from 'utils/test';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { range } from 'lodash';
import { RootState } from 'state/root';
import { Dispatch } from 'state/types/thunk';
import { getPosts } from './actions';
import { PostActionName } from './types';
import { Post } from 'models/Post';
import api from 'services/api';
import { posts } from '__fixtures__/post';

const mockStore = configureMockStore<Partial<RootState>, Dispatch>([thunk]);

describe('post actions', () => {
  let store: MockStoreEnhanced<Partial<RootState>, Dispatch>;
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

    const expectedResult: Post[] = range(0, 4).map(() => ({
      id: expect.any(Number),
      userId: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    }));

    const expectedActions = requestActions(PostActionName.GET_POSTS, { result: expectedResult });

    const result = await store.dispatch(getPosts());

    expect(result).toEqual(expectedResult);
    expect(store.getActions()).toEqual(expectedActions);
  });
});
