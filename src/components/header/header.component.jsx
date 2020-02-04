import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <h3 className='logo'>BrandLogo</h3>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
