import { Post } from 'models/Post';
import { range } from 'lodash';

export const post: Post = {
  id: 0,
  title: 'My Post 1',
};

export const posts: Post[] = range(0, 4).map((_, i) => ({ id: i, title: `My Post ${i + 1}` }));
