import React, { useEffect, useState } from "react";

import styles from "../Checkout.module.scss";
export const CheckOutItem = ({
  ProductName,
  ProductPrice,
  ProductAmount,
  ProductId,
  ProductIndex,
  ProductImage,
}) => {
  const [amount, setAmount] = useState(ProductAmount);
  const handleChangeAmount = (id, amountChange) => {
    setAmount((oldData) => oldData + amountChange);
  };
  return (
    <div className={`${styles["box-item"]} p-3`}>
      <div className="row mb-1">
        <div className="col-2">
          <img
            src={ProductImage}
            alt=""
            style={{ height: "140px", width: "140px" }}
          />
        </div>
        <div className="col-8 pl-3 pr-3">
          <div className={`${styles["box-title"]}`}>
            <h5>{ProductName}</h5>
          </div>
          <div className={`${styles["box-description"]}`}>
            <span>Size: medium, Color: blue, Material: Plastic</span>
          </div>
          <button className="btn btn-outline-danger p-3 pt-2 pb-2 mt-3">
            Remove
          </button>
        </div>
        <div className="col-2">
          <div className={`${styles["price"]} d-flex justify-content-end`}>
            <span>${ProductPrice}</span>
            {/* <span>$98.00</span> */}
          </div>
          <div className={`${styles["amount"]} mt-2`}>
            <div className=" d-flex justify-content-end">
              <button
                id="dec"
                className={`pull-left border`}
                onClick={() => {
                  handleChangeAmount(-1);
                }}
              >
                -
              </button>
              <span>{amount}</span>
              <button
                id="inc"
                className={` pull-right border`}
                onClick={() => {
                  handleChangeAmount(1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};
