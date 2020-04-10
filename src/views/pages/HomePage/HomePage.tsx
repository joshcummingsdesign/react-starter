import React from 'react';
import { FormattedMessage } from 'react-intl';

interface IHomePage {
  renderPosts: () => JSX.Element;
}

const HomePage = ({ renderPosts }: IHomePage) => (
  <div data-testid='home-page'>
    <h2>
      <FormattedMessage id='homePage.heading' defaultMessage='Blog' />
    </h2>
    {renderPosts()}
  </div>
);

export default HomePage;
