import api from '@services/api';
import { doAsync } from '@state/utils/doAsync';
import { PostsActionName } from './types';

export const getPosts = () =>
  doAsync(() => api.getPosts().then(res => res.data), {
    type: PostsActionName.GET_POSTS
  });
