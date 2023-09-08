import { useState } from 'react';
import stylesModal from './Modal.module.scss';
import { useNavigate } from 'react-router-dom';
const ModalAlert = (handleCloseModal, linkTo) => {
  //   const linkTo = useNavigate();
  return (
    <>
      <div className={`${stylesModal['title']}`}>
        <h6>Alert</h6>
      </div>
      <div className="line mt-2 mb-2"></div>

      <div className={`${stylesModal['body']}`}>
        <>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px' }}>Please add address for payment</div>
          </div>
        </>
      </div>
      <div className={`${stylesModal['footer']}`}>
        <button
          onClick={() => {
            window.location.href = '/info';

            handleCloseModal();
          }}
          className={`${stylesModal['cancelBtn']}`}
        >
          Ok
        </button>
      </div>
    </>
  );
};

export default ModalAlert;
