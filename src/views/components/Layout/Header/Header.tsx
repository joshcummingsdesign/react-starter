import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onLogin: () => void;
}

const Header = ({ onLogin }: Props) => (
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
    </ul>
  </header>
);

export default Header;
