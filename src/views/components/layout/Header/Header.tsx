import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => (
  <h1 data-testid='header-heading'>
    <FormattedMessage id='header.heading' defaultMessage='React Starter' />
  </h1>
);

export default Header;
