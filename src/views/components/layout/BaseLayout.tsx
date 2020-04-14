import React, { FC } from 'react';
import SEO, { ISEO } from 'views/components/layout/SEO';
import Header from 'views/components/layout/Header';
import Footer from 'views/components/layout/Footer/FooterContainer';

const BaseLayout: FC<ISEO> = ({ children, ...rest }) => (
  <main>
    <SEO {...rest} />
    <Header />
    {children}
    <Footer />
  </main>
);

export default BaseLayout;
