import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '@components/auth/AuthProvider';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isAuthenticated, login, logout }) => (
        <ul>
          <li>
            <Link className='a' to='/'>
              Home
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link className='a' to='/profile'>
                Profile
              </Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <button onClick={() => login()}>Login</button>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={() => logout()}>Logout</button>
            </li>
          )}
        </ul>
      )}
    </AuthConsumer>
  </header>
);

export default Header;
