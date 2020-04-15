import { Post } from 'models/Post';
import { range } from 'lodash';

export const post: Post = {
  id: 1,
  userId: 1,
  title: 'My Post 1',
  body: 'Lorem ipsum...',
};

export const posts: Post[] = range(0, 4).map((_, i) => ({
  ...post,
  id: i + 1,
  title: `My Post ${i + 1}`,
}));
