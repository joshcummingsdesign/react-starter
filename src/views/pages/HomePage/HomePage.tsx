import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '@components/Layout';
import PostListing from '@components/PostListing/PostListingContainer';

const HomePage = () => (
  <Layout>
    <h1>
      <FormattedMessage id='home.heading' defaultMessage='Home Page' />
    </h1>
    <p>
      <FormattedMessage id='home.text' defaultMessage='Welcome to React Starter!' />
    </p>
    <PostListing />
  </Layout>
);

export default HomePage;
