import React from 'react';

import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';

function DefaultLayout({ children, onLogin }) {
  return (
    <>
      <app-header>
        <Header />
      </app-header>
      <main className={styles['main']}>{children}</main>
      <app-footer>
        <Footer />
      </app-footer>
    </>
  );
}
export default DefaultLayout;
