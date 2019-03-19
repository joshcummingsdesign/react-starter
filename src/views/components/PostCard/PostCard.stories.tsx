import React from 'react';
import { storiesOf } from '@storybook/react';
import PostCard from './PostCard';

storiesOf('components/PostCard', module).add('default', () => (
  <PostCard
    title='Post Title'
    body='Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.'
  />
));
