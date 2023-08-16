import React, { useEffect, useState } from "react";

import styles from "./Checkout.module.scss";

export const NavCheckOut = ({ Price }) => {
  const [total, setTotal] = useState(Price);

  const PopUpCheckOut = () => {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Info
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className={`${styles["payment-type"]}`}>
                <h4>Choose payment method below</h4>
                <div
                  className={`${styles["types"]} flex justify-space-between`}
                >
                  <div className={`${styles["type"]} ${styles["selected"]}`}>
                    <div className={`${styles["logo"]}`}>
                      <i className="far fa-credit-card"></i>
                    </div>
                    <div className="text">
                      <p>Pay with PayPal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-3">
      <div className="d-inline-block col-12">
        <div className="bg-w border rounded p-4 pr-3 pl-3">
          <div className="title-sm">Have a coupon?</div>
          <div className="list-box">
            <div className="box-item">
              <div className={`${styles["input-box-item"]} d-flex col-12 mt-2`}>
                <input
                  type="text"
                  placeholder="Add coupon"
                  className="border rounded p-2 pt-1 pb-1"
                />
                <div className="pl-3">
                  <button className="btn border">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-inline-block col-12 mt-3">
        <div className="bg-w border rounded p-4 pr-3 pl-3">
          <div className="title-sm">Use gift point?</div>
          <div className="list-box">
            <div className={`${styles["input-box-item"]} d-flex col-12 mt-2`}>
              <input
                type="text"
                // value="2000"
                className="border rounded p-2 pt-1 pb-1"
              />
              <div className="pl-3">
                <button className="btn border">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-inline-block col-12 mt-3">
        <div className="bg-w border rounded p-4 pr-3 pl-3">
          <div
            className={`${styles["subtract"]} d-flex justify-content-between `}
          >
            <span>Discount:</span>
            <span>$0</span>
          </div>
          <div className={`${styles["plus"]} d-flex justify-content-between `}>
            <span>Tax:</span>
            <span>$0</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Gift Point:</span>
            <span>$0</span>
          </div>
          <div className="line mt-3 mb-3"></div>
          <div className="d-flex justify-content-between">
            <span>
              <strong>Total:</strong>
            </span>
            <span>
              <strong>${total}</strong>
            </span>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btn-success p-5 pt-2 pb-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Checkout
            </button>
            <PopUpCheckOut />
          </div>
          {/* <div
            className={`${styles["logo-bank"]} d-flex justify-content-center mt-3`}
          >
            <div
              className={`${styles["active"]} border rounded p-1 `}
              style={{ width: "50px", height: "50px" }}
            >
              <img
                src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
                alt=""
                style={{ height: "38px", width: "38xp" }}
              />
            </div>
            <div
              className="border rounded p-1 ml-3"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                src="https://play-lh.googleusercontent.com/NfFBz1Rxk0nQ7RsOk0kXbi1AEp1ZJ3rzJHbwRlmheZEDPPHh7dscqyxyX-ehxTl7tw"
                alt=""
                style={{ height: "38px", width: "38xp" }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
