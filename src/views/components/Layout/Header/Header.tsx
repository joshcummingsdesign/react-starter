import React from 'react';
import { Link } from 'react-router-dom';
import { AuthProps } from '@components/auth/AuthProvider';

const Header = ({ isAuthenticated, login, logout }: AuthProps) => (
  <header>
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
  </header>
);

export default Header;
