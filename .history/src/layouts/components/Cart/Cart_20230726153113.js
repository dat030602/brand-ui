import React from "react";

import styles from "./Cart.module.scss";
import { eraseCookie } from "~/utils/cookies";
import { useNavigate } from "react-router-dom";

function Cart({ children }) {
  const navigate = useNavigate();

  const nav = () => {
    return (
      <div className="col-2">
        <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
          <a href="/">Personal info</a>
        </div>
        <div
          className={`${styles["side-item"]} rounded pl-3 p-1 mb-2 ${styles["active"]}`}
        >
          <a href="/my-cart">My cart</a>
        </div>
        <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
          <a href="/favorite">Favorite</a>
        </div>
        <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
          <a href="/orders-history">Orders history</a>
        </div>
        <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2 active`}>
          <a href="/personal/edit">Profile setting</a>
        </div>
        <div
          className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}
          onClick={() => {
            eraseCookie("Name");
            eraseCookie("Username");
            eraseCookie("Token");
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <button>Log out</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row">
            {nav()}
            <div className="col-10 pl-3">
              <div className="bg-w rounded border p-4">
                <div className="title pb-3">
                  <h3>My Cart</h3>
                </div>
                <div className="line"></div>
                <div className="list-box mt-4">
                  <div className="box-item mb-4">
                    <div className="border rounded p-3 pt-3">
                      <div className="list-products"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
