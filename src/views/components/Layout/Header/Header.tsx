import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
      <li>
        <Link className='a' to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className='a' to='/posts'>
          Posts
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
