import React from 'react';

import styles from './PageNotFound.module.scss';

function PageNotFound({ children }) {
  return (
    <div id={styles['notfound']}>
      <div className={styles['notfound']}>
        <div className={styles['notfound-404']}>
          <h1
            style={{
              backgroundImage: `url(${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                window.location.href.split('/').length - 1 >= 3 ? '../' : ''
              }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/image/bg-not-found.jpg)`,
            }}
          >
            Oops!
          </h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <a href="/">Go To Homepage</a>
      </div>
    </div>
  );
}
export default PageNotFound;
