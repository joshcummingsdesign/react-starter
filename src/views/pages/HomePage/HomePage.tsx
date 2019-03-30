import React from 'react';
import { FormattedMessage } from 'react-intl';
import ability from '@src/config/ability';
import Can from '@components/auth/Can';
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
    <Can I='read' a='Post'>
      <p>You can only see this with "read" permissions.</p>
    </Can>
    <Can I='edit' a='Post'>
      <p>You can only see this with "edit" permissions</p>
      <button onClick={() => ability.update([{ subject: 'Post', actions: 'read' }])}>
        Toggle Readonly
      </button>
    </Can>
    <PostListing />
  </Layout>
);

export default HomePage;
