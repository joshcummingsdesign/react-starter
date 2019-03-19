import React from 'react';
import Layout from '@components/Layout';
import PostListing from '@components/PostListing/PostListingContainer';

const HomePage = () => (
  <Layout>
    <h1>Home</h1>
    <PostListing />
  </Layout>
);

export default HomePage;
