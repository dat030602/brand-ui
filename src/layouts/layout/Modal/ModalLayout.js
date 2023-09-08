import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ModalLayout.module.scss';
import { useSelector, useDispatch, connect } from 'react-redux';
import { change, setComponents } from '~/utils/toggleModal';
function ModalLayout({ component }) {
  return (
    <div className={`${styles['modalBackground']}`}>
      <div className={`${styles['modalContainer']}`}>{component.data}</div>
    </div>
  );
}
export default ModalLayout;
