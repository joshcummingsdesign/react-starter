import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div data-testid='page-not-found'>
    <h1>
      <FormattedMessage id='pageNotFound.heading' defaultMessage='Page Not Found' />
    </h1>
    <Link to='/' data-testid='back-to-home'>
      <FormattedMessage id='pageNotFound.link' defaultMessage='Back' />
    </Link>
  </div>
);

export default PageNotFound;
