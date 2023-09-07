import React, { useEffect, useState } from 'react';
import ModalLayout from '../Modal/ModalLayout';
import styles from './AdminLayout.module.scss';

import HeaderAdmin from '~/layouts/components/HeaderAdmin';

function AdminLayout({ page, onLogin }) {
  const [modal, setModal] = useState({ show: false, data: null });
  const setDataModal = (data) => {
    setModal({ show: true, data: data });
    // console.log("231sdsa");
  };
  const handleCloseModal = () => {
    setModal({ show: false, data: null });
  };
  return (
    <>
      <app-header>
        <HeaderAdmin />
      </app-header>
      <main className={styles['main']}>{page(setDataModal, handleCloseModal, modal)}</main>
      {modal.show && modal.data && <ModalLayout component={modal} />}
    </>
  );
}
export default AdminLayout;
