import { useState } from 'react';
import stylesModal from './Modal.module.scss';
const ModalVoucher = (voucher, handleCloseModal, setDataModal, setChoose) => {
  let chooseTemp = -1;
  return (
    <>
      <div className={`${stylesModal['title']}`}>
        <h6>Voucher</h6>
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className={`${stylesModal['titleCloseBtn']}`}
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
      <div className="line mt-2 mb-2"></div>

      <div className={`${stylesModal['body']}`} style={{ justifyContent: 'normal' }}>
        <form style={{ width: '100%' }}>
          {voucher !== undefined &&
            Object.keys(voucher).map((index) => (
              <>
                <div style={{ display: 'flex' }}>
                  <div>
                    <input
                      type="radio"
                      id={index}
                      name="address_options"
                      value={voucher[index].id_voucher}
                      onChange={(e) => {
                        chooseTemp = index;
                      }}
                    />
                  </div>
                  <div style={{ marginLeft: '10px' }}>
                    <label for={index}>
                      {voucher[index].name_voucher}
                      <br />
                      Discount : {voucher[index].discount}%
                    </label>
                  </div>
                </div>
                <div className="line mt-2 mb-2"></div>
              </>
            ))}
        </form>
      </div>
      <div className={`${stylesModal['footer']}`}>
        <button
          onClick={() => {
            handleCloseModal();
            chooseTemp = -1;
          }}
          className={`${stylesModal['cancelBtn']}`}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            if (chooseTemp != -1)
              setChoose({
                id: voucher[chooseTemp]?.id_voucher,
                name: voucher[chooseTemp]?.name_voucher,
                discount: voucher[chooseTemp]?.discount,
              });
            handleCloseModal();
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ModalVoucher;
