import React from 'react';

import styles from './PageNoSearchLayout.module.scss';

import Footer from '~/layouts/components/Footer/Footer';
import HeaderNoSearch from '~/layouts/components/HeaderNoSearch';

function PageNoSearchLayout({ children, onLogin }) {
  return (
    <>
      <app-header>
        <HeaderNoSearch />
      </app-header>
      <main className={styles['main']}>{children}</main>
      <app-footer>
        <Footer />
      </app-footer>
    </>
  );
}
export default PageNoSearchLayout;
