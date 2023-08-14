import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Checkout.module.scss";
import stylesModal from "./Modal.module.scss";
import Select from "react-select";
import { getCookie } from "~/utils/cookies";
import { GetAddress } from "~/services/CheckoutServices";
import { useSelector, useDispatch } from "react-redux";
import { change, setComponents } from "~/utils/toggleModal";

export const Modal = ({ chooseTemp, setChooseTemp, address }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`${stylesModal["title"]}`}>
        <h6>My Address</h6>
      </div>
      <div className="line mt-2 mb-2"></div>

      <div className={`${stylesModal["body"]}`}>
        <form>
          {/* <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label> */}
          {address !== undefined &&
            Object.keys(address).map((index) => (
              <>
                <div
                  style={{ display: "flex" }}
                  onClick={() => {
                    chooseTemp = address[index].stt;
                    console.log(chooseTemp);
                  }}
                >
                  <div>
                    <input
                      type="radio"
                      id={address[index].stt}
                      name="address_options"
                      value={address[index].stt}
                      checked={
                        address[index].stt === chooseTemp ? "checked" : ""
                      }
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <label for={address[index].stt}>
                      {address[index].SONHA_DUONG}
                      <br />
                      {address[index].TEN_PHUONG}, {address[index].TEN_THANHPHO}
                      , {address[index].TEN_TINH}
                    </label>
                  </div>
                </div>
                <div className="line mt-2 mb-2"></div>
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
        <button
          onClick={() => {
            dispatch(change());
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
};
