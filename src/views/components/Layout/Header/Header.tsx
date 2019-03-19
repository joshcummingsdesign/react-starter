import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '@components/auth/AuthProvider';

const Header = () => (
  <header>
    <AuthConsumer>
      {({ isLoggedIn, login, logout }) => (
        <ul>
          <li>
            <Link className='a' to='/'>
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link className='a' to='/profile'>
                Profile
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <button onClick={login}>Login</button>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      )}
    </AuthConsumer>
  </header>
);

export default Header;
