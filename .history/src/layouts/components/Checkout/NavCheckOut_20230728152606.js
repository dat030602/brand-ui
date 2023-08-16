import React, { useEffect, useState } from "react";

import styles from "./Checkout.module.scss";
import Select from "react-select";
import { getCookie } from "~/utils/cookies";
import { GetAddress } from "~/services/CheckoutServices";
export const NavCheckOut = ({ Price, handlePayment }) => {
  const username = getCookie("Username");
  const [total, setTotal] = useState(Price);
  const [payment, setPayment] = useState("paypal");
  const [address, setAddress] = useState([]);
  const createOption = (fullInfo, index) => ({
    label: fullInfo,
    value: index,
  });
  const [options, setOption] = useState([]);
  const [choose, setChoose] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      await GetAddress(username).then((result) => {
        setAddress(result);
      });
      setLoad(false);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (address.length > 0) {
      setOption([]);
      address.map((x, index) => {
        const temp = createOption(x.fullInfo, x.stt);
        setOption((oldData) => [...oldData, temp]);
        if (index === 0) setChoose(temp);
      });
    }
  }, [address]);

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
                <h6>Choose payment method below</h6>
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
              {/* <div className={`${styles["search-col"]} col-md-auto`}>
                <select
                  className={`${styles["selection"]}`}
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                >
                  {address !== undefined &&
                    Object.keys(address).map((index) => (
                      <option value={address[index].stt} key={index}>
                        {address[index].fullInfo}
                      </option>
                    ))}
                </select>
              </div> */}
              {/* <div>
                <h6>Ship fee: ${}</h6>
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handlePayment("paypal")}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-3">
      <div className={`${styles["title"]} mb-3`}>
        <h3>Summary</h3>
      </div>
      {/* <div className="d-inline-block col-12">
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
      </div> */}
      {/* <div className="d-inline-block col-12 mt-3">
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
      </div> */}
      <div className="bg-w border rounded p-4 pr-3 pl-3">
        <div className={`${styles["address-col"]} col-md-auto`}>
          <select
            className={`${styles["selection"]}`}
            onChange={(event) => {
              console.log(event.target.value);
            }}
            style={{ fontSize: "12px" }}
          >
            {address !== undefined &&
              Object.keys(address).map((index) => (
                <option value={address[index].stt} key={index}>
                  {address[index].fullInfo}
                </option>
              ))}
          </select>
        </div>
        <div className="line mt-3 mb-3"></div>

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
            disabled={load}
          >
            Payment
          </button>
          <PopUpCheckOut />
        </div>
      </div>
    </div>
  );
};
