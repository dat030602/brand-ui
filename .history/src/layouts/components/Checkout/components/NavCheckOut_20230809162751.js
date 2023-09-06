import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "../Checkout.module.scss";
import stylesModal from "./Modal.module.scss";
import stylesLoad from "./Load.module.scss";
import Select from "react-select";
import { getCookie } from "~/utils/cookies";
import { GetAddress, GetShipData } from "~/services/CheckoutServices";
import ModalAddress from "./ModalAddress";
export const NavCheckOut = ({
  Price,
  handlePayment,
  setDataModal,
  handleCloseModal,
}) => {
  const username = getCookie("Username");
  const [total, setTotal] = useState(Price);
  const [payment, setPayment] = useState("paypal");
  const [address, setAddress] = useState([]);
  const [shipData, setShipData] = useState(null);
  const [choose, setChoose] = useState(null);
  const [load, setLoad] = useState(true);
  const [load2, setLoad2] = useState(true);
  const fetchApi = async () => {
    await GetAddress(username).then((result) => {
      if (result.message === "success") setAddress(result.data);
      else fetchApi();
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (address.length > 0) {
      address.map((x, index) => {
        if (x.MAC_DINH === 1) {
          setChoose({
            data: x,
            index: index,
          });
        }
      });

      setLoad(false);
    }
  }, [address]);

  const fetchDataShip = async () => {
    await GetShipData(username, choose.data.stt).then((result) => {
      setShipData(result);
      // setLoad2(false);
    });
  };

  useEffect(() => {
    if (choose) {
      setLoad2(true);
      fetchDataShip();
    }
  }, [choose]);

  const ModalPayment = () => {
    return (
      <>
        <div className={`${stylesModal["title"]}`}>
          <h6>Choose payment</h6>
        </div>
        <div className="line mt-2 mb-2"></div>

        <div className={`${stylesModal["body"]}`}>
          <div className={`${styles["payment-type"]}`}>
            <div className={`${styles["types"]} flex justify-space-between`}>
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
        <div className={`${stylesModal["footer"]}`}>
          <button onClick={() => {}} className={`${stylesModal["cancelBtn"]}`}>
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </>
    );
  };

  return (
    <div className="col-3">
      {!load && (
        <>
          <div className={`${styles["title"]} mb-3`}>
            <h3>Summary</h3>
          </div>

          <div className="bg-w border rounded p-4 pr-3 pl-3">
            <div>
              <h6> Delivery Address </h6>

              <button
                onClick={() => {
                  console.log(choose.index);
                  const dataModal = ModalAddress(
                    address,
                    choose.index,
                    handleCloseModal,
                    setDataModal,
                    setChoose
                  );
                  setDataModal(dataModal);
                }}
                style={{ width: "100%", textAlign: "left" }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ width: "90%" }}>
                    <p>{choose.data.SONHA_DUONG}</p>
                    <p>
                      {choose.data.TEN_PHUONG}, {choose.data.TEN_THANHPHO},{" "}
                      {choose.data.TEN_TINH}
                    </p>
                  </div>
                  <div style={{ width: "10%" }}>
                    <i
                      class="fas fa-angle-right"
                      style={{ fontSize: "28px" }}
                    ></i>
                  </div>
                </div>
              </button>
            </div>

            <div className="line mt-3 mb-3"></div>
            <div>
              {load2 ? (
                <p>Loading</p>
              ) : (
                <p>{`Ship in ${shipData.dayShip - 1} - ${
                  shipData.dayShip
                } days`}</p>
              )}
            </div>
            <div className="line mt-3 mb-3"></div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Redeem x coin</p>
              <input type="checkbox" name="coin" id="coin" />
            </div>

            <div className="line mt-3 mb-3"></div>
            <button>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                  src="https://img.icons8.com/ios/50/loyalty-card.png"
                  alt="loyalty-card"
                />
                <p>Apply discount voucher</p>
                <div>
                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                      // marginRight: "10px",
                    }}
                    src="https://img.icons8.com/ios-filled/50/forward--v1.png"
                    alt="forward--v1"
                  />
                </div>
              </div>
            </button>

            <div className="line mt-3 mb-3"></div>

            <div
              className={`${styles["subtract"]} d-flex justify-content-between `}
            >
              <span>Item total price:</span>
              <span>$0</span>
            </div>
            <div
              className={`${styles["plus"]} d-flex justify-content-between `}
            >
              <span>Tax:</span>
              <span>$0</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Coins Redeemed:</span>
              <span>$0</span>
            </div>
            <div className="d-flex justify-content-between">
              {load2 ? (
                <>
                  <span>Shipping fees:</span>
                  <span>Loading</span>
                </>
              ) : (
                <>
                  <span>Shipping fees:</span>
                  <span>${shipData.fee}</span>
                </>
              )}
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
                disabled={load}
                onClick={() => {
                  // dispatch(change());
                  // const temp = ModalPayment();
                  setDataModal();
                }}
              >
                Payment
              </button>
              {/* <PopUpCheckOut /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};