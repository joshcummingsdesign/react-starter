import React, { SFC } from 'react';
import Header from './Header/HeaderContainer';
import Footer from './Footer';

const Layout: SFC = ({ children }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
