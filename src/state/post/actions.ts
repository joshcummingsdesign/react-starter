import { PostActionName, GetPostsAction } from './types';
import api from 'services/api';
import request from 'state/utils/request';
import { Thunk } from 'state/types/thunk';

export const getPosts = (): Thunk<GetPostsAction> =>
  request(() => api.getPosts().then((res) => res.data.slice(0, 4)), {
    type: PostActionName.GET_POSTS,
  });
