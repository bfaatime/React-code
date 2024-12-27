import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss'; 
const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <NavLink to="/" className={styles.logo}>
            Apple
          </NavLink>
          <div className={styles.navbarCollapse}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink to="/home" className={styles.navLink}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/contact" className={styles.navLink}>
                  Contact
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/products" className={styles.navLink}>
                  Products
                </NavLink>
              </li>
              <li className={`${styles.navItem} ${styles.dropdown}`}>
                <NavLink to="/products" className={styles.navLink}>
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
