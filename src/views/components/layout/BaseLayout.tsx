import React, { FC } from 'react';
import Header from 'views/components/layout/Header';
import Footer from 'views/components/layout/Footer/FooterContainer';

const BaseLayout: FC = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
);

export default BaseLayout;
