import React from 'react';
import { storiesOf } from '@storybook/react';
import Posts from 'views/components/Posts';
import HomePage from '.';
import { posts } from '__fixtures__/post';

storiesOf('pages/HomePage', module).add('default', () => (
  <HomePage renderPosts={() => <Posts posts={posts} />}></HomePage>
));
