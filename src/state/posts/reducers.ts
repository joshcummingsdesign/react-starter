import { PostsState } from '.';
import { PostsAction, PostsActionName } from './types';

const posts = (state: PostsState = [], action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionName.GET_POSTS: {
      return action.result || state;
    }
  }

  return state;
};

export default posts;
