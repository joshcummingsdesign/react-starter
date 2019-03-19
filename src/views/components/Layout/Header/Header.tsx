import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const Header = ({ isLoggedIn, onLogin, onLogout }: Props) => (
  <header>
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
          <button onClick={onLogin}>Login</button>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      )}
    </ul>
  </header>
);

export default Header;
