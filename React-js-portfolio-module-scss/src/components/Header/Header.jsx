import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <h1>Fatimə Bəxşəliyeva</h1>
        <p>Marketer/Front-end Developer</p>
        <div className={styles['header-buttons']}>
       
            <button >Aboutme</button>
          
            <button>Contact</button>
          
        </div>
      </div>
    </header>
  );
}

export default Header;









