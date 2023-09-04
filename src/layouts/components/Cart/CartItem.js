import React, { useState } from "react";

import styles from "./Cart.module.scss";
import { eraseCookie } from "~/utils/cookies";
import { useNavigate } from "react-router-dom";

const CartItem = ({ ProductName, ProductPrice, ProductAmount }) => {
  const [amount, setAmount] = useState(ProductAmount);
  const ChangeAmount = (count) => {
    // setAmount(amount + count);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <a href="/" className="product-item mb-2">
        <div className="row">
          <div
            className="col-1 border rounded p-2 d-flex align-items-center justify-content-center"
            style={{ width: "84.5px", height: "auto" }}
          >
            <img
              src="../../../../assets/image/clock.png"
              alt=""
              className="img-fluid max-width"
            />
          </div>
          <div className="col-9 pl-3 pr-3">
            <div className="box-title">
              <h5>{ProductName}</h5>
            </div>
            <div className="box-description">
              <span className="text-gray">
                Size: medium, Color: blue, Material: Plastic
              </span>
            </div>
          </div>
        </div>
      </a>
      <div className="col-2">
        <div className="d-flex flex-column align-items-end">
          <span>${ProductPrice}</span>
        </div>
        <div className={`${styles["amount"]} mt-2`}>
          <div className="border d-flex justify-content-end">
            <button
              id="dec"
              className={`btn btn-outline-secondary pull-left`}
              onClick={() => {
                ChangeAmount(-1);
              }}
            >
              -
            </button>
            <input type="text" name="" value={amount} />
            <button
              id="inc"
              className={`btn btn-outline-primary pull-right`}
              onClick={() => {
                ChangeAmount(1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
