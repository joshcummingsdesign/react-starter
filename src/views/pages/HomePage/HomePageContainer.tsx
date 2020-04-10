import React from 'react';
import BaseLayout from 'views/components/layout/BaseLayout';
import Posts from 'views/components/Posts/PostsContainer';
import HomePage from '.';

const HomePageContainer = () => (
  <BaseLayout>
    <HomePage renderPosts={() => <Posts />} />
  </BaseLayout>
);

export default HomePageContainer;
