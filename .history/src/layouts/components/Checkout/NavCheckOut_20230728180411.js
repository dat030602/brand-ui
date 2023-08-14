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
      {!load && (
        <>
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
            <div>
              <h6> Delivery Address </h6>
              {/* <select
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
            </select> */}
              <div>
                <div style={{ width: "256px", display: "inline-block" }}>
                  <p>{address[0].fullInfo}</p>
                </div>
                <button>
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="line mt-3 mb-3"></div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Redeem x coin</p>
              <input type="checkbox" name="coin" id="coin" />
            </div>

            <div className="line mt-3 mb-3"></div>
            <div>
              <div class="KPtBNH hairline-border-bottom">
                <div class="wATJ8+">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -2 23 22"
                    history="[object Object]"
                  >
                    <g filter="url(#voucher-filter0_d)">
                      <mask id="voucher-mask0_d" fill="#fff">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                        ></path>
                      </mask>
                      <path
                        d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                        mask="url(#voucher-mask0_d)"
                      ></path>
                    </g>
                    <path
                      clip-rule="evenodd"
                      d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                    ></path>
                    <defs>
                      <filter
                        id="voucher-filter0_d"
                        x="0"
                        y="1"
                        width="20"
                        height="16"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation=".5"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div class="JBCIOW">Shopee Voucher</div>
                <div class="Ne1U5E">
                  <span class="iVfgfc">Select Voucher</span>
                </div>
                <svg
                  enable-background="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  role="img"
                  class="stardust-icon stardust-icon-arrow-right SpKcge"
                >
                  <path
                    stroke="none"
                    d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
                  ></path>
                </svg>
                <div style="display: contents;"></div>
              </div>
            </div>
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
              <span>Shipping fees:</span>
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
        </>
      )}
    </div>
  );
};
