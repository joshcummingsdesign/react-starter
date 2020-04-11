import axios, { AxiosInstance, AxiosPromise } from 'axios';
import config from 'config';
import { Post } from 'models/Post';

class ApiService {
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: config.apiUrl,
    });
  }

  getPosts(): AxiosPromise<Post[]> {
    return this.request.get('/posts');
  }
}

export default new ApiService();
