import axios, { AxiosPromise } from 'axios';
import config from '@src/config';
import { Post } from '@models/posts';

class ApiService {
  request = axios.create({
    baseURL: config.apiUrl
  });

  getPosts(): AxiosPromise<Post[]> {
    return this.request('/posts?_start0&_limit=5');
  }
}

export default new ApiService();
