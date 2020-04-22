import api from 'services/api';
import request from 'state/utils/request';
import { PostActionName } from './types';

export const getPosts = () =>
  request(() => api.getPosts().then((res) => res.data.slice(0, 4)), {
    type: PostActionName.GET_POSTS,
  });
