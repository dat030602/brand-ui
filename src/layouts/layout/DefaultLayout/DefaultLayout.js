import React, { useEffect, useState } from 'react';
import ModalLayout from '../Modal/ModalLayout';

import styles from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header/Header';
import Footer from '~/layouts/components/Footer/Footer';

function DefaultLayout({ page, onLogin }) {
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
        <Header />
      </app-header>
      <main className={styles['main']}>{page(setDataModal, handleCloseModal, modal)}</main>
      <app-footer>
        <Footer />
      </app-footer>
      {modal.show && modal.data && <ModalLayout component={modal} />}
    </>
  );
}
export default DefaultLayout;
