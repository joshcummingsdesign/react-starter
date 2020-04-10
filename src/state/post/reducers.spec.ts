import post from './reducers';
import { PostActionName } from './types';
import { PostState } from '.';
import { posts } from '__fixtures__/post';

describe('requests reducers', () => {
  const initialState: PostState = { posts: [] };

  it('should return the initial state', () => {
    expect(post(initialState, {} as any)).toEqual(initialState);
  });

  it('should handle GET_POSTS', () => {
    expect(
      post(initialState, {
        type: PostActionName.GET_POSTS,
        result: posts,
      })
    ).toEqual({ posts });
  });
});
