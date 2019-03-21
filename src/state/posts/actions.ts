import api from '@services/api';
import { request } from '@state/utils/request';
import { PostsActionName } from './types';

export const getPosts = () =>
  request(() => api.getPosts().then(res => res.data), {
    type: PostsActionName.GET_POSTS
  });
