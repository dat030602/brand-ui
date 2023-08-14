import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Checkout.module.scss";
import stylesModal from "./Modal.module.scss";
import Select from "react-select";
import { getCookie } from "~/utils/cookies";
import { GetAddress } from "~/services/CheckoutServices";
import { useSelector, useDispatch } from "react-redux";
import { change, setComponents } from "~/utils/toggleModal";
export const NavCheckOut = ({ Price, handlePayment }) => {
  const username = getCookie("Username");
  const [total, setTotal] = useState(Price);
  const [payment, setPayment] = useState("paypal");
  const [address, setAddress] = useState([]);
  const isShow = useSelector((state) => state.modal).isShow;
  const dispatch = useDispatch();

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

  // const PopUpCheckOut = () => {
  //   return (
  //     <div
  //       className="modal fade"
  //       id="exampleModal"
  //       tabindex="-1"
  //       role="dialog"
  //       aria-labelledby="exampleModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="exampleModalLabel">
  //               Info
  //             </h5>
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //             >
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             <div className={`${styles["payment-type"]}`}>
  //               <h6>Choose payment method below</h6>
  //               <div
  //                 className={`${styles["types"]} flex justify-space-between`}
  //               >
  //                 <div className={`${styles["type"]} ${styles["selected"]}`}>
  //                   <div className={`${styles["logo"]}`}>
  //                     <i className="far fa-credit-card"></i>
  //                   </div>
  //                   <div className="text">
  //                     <p>Pay with PayPal</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="modal-footer">
  //             <button
  //               type="button"
  //               className="btn btn-secondary"
  //               data-dismiss="modal"
  //             >
  //               Close
  //             </button>
  //             <button
  //               type="button"
  //               className="btn btn-primary"
  //               onClick={() => handlePayment("paypal")}
  //             >
  //               Payment
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const Modal = () => {
    return (
      <>
        <div className={`${stylesModal["title"]}`}>
          <h5>List Address</h5>
        </div>
        <div className={`${stylesModal["body"]}`}>
          <form>
            {/* <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label> */}
            {address !== undefined &&
              Object.keys(address).map((index) => (
                <>
                  <label for={address[index].stt}>
                    {" "}
                    {address[index].fullInfo}
                  </label>
                  <input
                    type="radio"
                    id={address[index].stt}
                    name="address_options"
                    value={address[index].stt}
                  />
                  <br />
                </>
              ))}
          </form>
        </div>
        <div className={`${stylesModal["footer"]}`}>
          <button
            onClick={() => {
              dispatch(change());
            }}
            className={`${stylesModal["cancelBtn"]}`}
          >
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
                  dispatch(change());
                  dispatch(setComponents(Modal()));
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ width: "90%" }}>
                    <p>{address[0].fullInfo}</p>
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
              {/* <PopUpCheckOut /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
