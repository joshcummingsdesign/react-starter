import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
  onLogout: () => void;
}

const Header = ({ onLogin, onLogout }: Props) => (
  <header>
    <ul>
      <li>
        <Link className='a' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='a' to='/profile'>
          Profile
        </Link>
      </li>
      <li>
        <button onClick={onLogin}>Login</button>
      </li>
      <li>
        <button onClick={onLogout}>Logout</button>
      </li>
    </ul>
  </header>
);

export default Header;
