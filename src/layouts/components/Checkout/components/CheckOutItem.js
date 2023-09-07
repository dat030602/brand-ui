import React, { useEffect, useState } from 'react';
import { ChangeItemCartAmount } from '~/services/CheckoutServices';
import styles from '../Checkout.module.scss';
import { getCookie } from '~/utils/cookies';
export const CheckOutItem = ({
  index,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductAmount,
  ProductId,
  ProductIndex,
  ProductImage,
  setTotal,
  setRemoveId,
  setChangeId,
}) => {
  const [amount, setAmount] = useState(ProductAmount);

  return (
    <div className={`${styles['box-item']} p-3`}>
      <div className="row mb-1">
        <div className="col-2">
          <img src={ProductImage} alt="" style={{ height: '80px', width: '80px' }} />
        </div>
        <div className="col-3 pl-3 pr-3">
          <div className={`${styles['box-title']}`}>
            <h5>{ProductName}</h5>
          </div>
          <div className={`${styles['box-description']}`}>
            <span>{ProductDescription}</span>
          </div>
        </div>
        <div className="col-2" style={{ textAlign: 'center', margin: 'auto' }}>
          <span>{ProductPrice}</span>
        </div>
        <div className="col-2" style={{ textAlign: 'center', margin: 'auto' }}>
          <span>{amount}</span>
        </div>
        <div style={{ textAlign: 'center', width: '25%', margin: 'auto' }}>
          <span>{ProductPrice * amount}</span>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
