import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/" exact activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/about" activeClassName={styles.active}>
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/products" activeClassName={styles.active}>
                Products
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/contact" activeClassName={styles.active}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;