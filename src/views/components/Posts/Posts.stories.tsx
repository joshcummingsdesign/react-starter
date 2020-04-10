import React from 'react';
import { storiesOf } from '@storybook/react';
import Posts from '.';
import { posts } from '__fixtures__/post';

storiesOf('components/Posts', module)
  .add('default', () => <Posts posts={posts} />)
  .add('loading', () => <Posts posts={posts} isLoading={true} />)
  .add('error', () => <Posts posts={posts} errorMessage='Request failed. Please try again.' />);
