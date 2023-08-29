import React from 'react';
import Header from './navigation/Header/Header';
import Footer from './navigation/Footer/Footer';
import classes from './index.module.css';
type Props = { children?: React.ReactNode };

const Layout: React.FC<Props> = (props) => {
  return (
    <div className={classes['layout-container']}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
