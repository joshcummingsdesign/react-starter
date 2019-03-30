import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '@components/Layout';
import ProfileSettings from '@pages/ProfilePage/ProfileSettings';

const ProfilePage = () => (
  <Layout>
    <h1>
      <FormattedMessage id='profile.heading' defaultMessage='Profile Page' />
    </h1>
    <p>
      <FormattedMessage id='profile.text' defaultMessage='Welcome to your profile!' />
    </p>
    <ProfileSettings />
  </Layout>
);

export default ProfilePage;
