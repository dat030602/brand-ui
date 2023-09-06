import React from 'react';

import styles from './AdminLayout.module.scss';

import HeaderAdmin from '~/layouts/components/HeaderAdmin';

function AdminLayout({ children, onLogin }) {
  return (
    <>
      <app-header>
        <HeaderAdmin />
      </app-header>
      <main className={styles['main']}>{children}</main>
    </>
  );
}
export default AdminLayout;
