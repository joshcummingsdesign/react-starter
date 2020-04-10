import React from 'react';
import { FormattedMessage } from 'react-intl';

interface IFooter {
  renderLangaugeSelect: () => JSX.Element;
}

const Footer = ({ renderLangaugeSelect }: IFooter) => (
  <div>
    {renderLangaugeSelect()}
    <p data-testid='footer-copyright'>
      <FormattedMessage id='footer.copyright' defaultMessage='React Starter' /> &copy;{' '}
      {new Date().getFullYear()}
    </p>
  </div>
);

export default Footer;
