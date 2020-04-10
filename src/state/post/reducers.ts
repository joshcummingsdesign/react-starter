import { PostState } from '.';
import { PostAction, PostActionName } from './types';

const initialState: PostState = {
  posts: [],
};

const post = (state: PostState = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionName.GET_POSTS: {
      return { ...state, posts: action.result || state.posts };
    }

    default: {
      return state;
    }
  }
};

export default post;
