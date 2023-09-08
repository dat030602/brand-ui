import React, { useEffect, useState } from 'react';
import ModalLayout from '../Modal/ModalLayout';
import styles from './PageNoSearchLayout.module.scss';

import Footer from '~/layouts/components/Footer/Footer';
import HeaderNoSearch from '~/layouts/components/HeaderNoSearch';

function PageNoSearchLayout({ page, onLogin }) {
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
        <HeaderNoSearch />
      </app-header>
      <main className={styles['main']}>{page(setDataModal, handleCloseModal, modal)}</main>
      <app-footer>
        <Footer />
      </app-footer>
      {modal.show && modal.data && <ModalLayout component={modal} />}
    </>
  );
}
export default PageNoSearchLayout;
