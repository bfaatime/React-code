import React from 'react';
import styles from './index.module.scss';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;