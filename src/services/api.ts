import axios, { AxiosPromise } from 'axios';
import { Post } from 'models/Post';

class ApiService {
  private request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  getPosts(): AxiosPromise<Post[]> {
    return this.request.get('/posts');
  }
}

export default new ApiService();
