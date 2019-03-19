import React from 'react';
import Layout from '@components/Layout';
import PostListing from '@components/PostListing/PostListingContainer';

const PostsPage = () => (
  <Layout>
    <h1>Posts</h1>
    <PostListing />
  </Layout>
);

export default PostsPage;
