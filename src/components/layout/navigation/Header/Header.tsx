import React from 'react';
import '../../../../index.css';
import logo from '../../../../assets/images/logo.png';
import classes from './Header.module.css';
import Search from '../../../Search/SearchBox';

const Header = () => {
  return (
    <header className={classes['header-wrapper']}>
      <span className={classes['title-wrapper']}>
        <img className={classes['logo']} src={logo} alt="logo" />
        <h1 className={classes['header-title']}>Weather App</h1>
      </span>
      <Search />
    </header>
  );
};

export default Header;
