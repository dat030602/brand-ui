import React from "react";

import styles from "./Favorite.module.scss";
import { eraseCookie } from "~/utils/cookies";
import { useNavigate } from "react-router-dom";

function Favorite({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row">
            <div className="col-2">
              <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
                <a href="/">Personal info</a>
              </div>
              <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
                <a href="/my-cart">My cart</a>
              </div>
              <div
                className={`${styles["side-item"]} rounded pl-3 p-1 mb-2 ${styles["active"]}`}
              >
                <a href="/favorite">Favorite</a>
              </div>
              <div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
                <a href="/orders-history">Orders history</a>
              </div>
              <div
                className={`${styles["side-item"]} rounded pl-3 p-1 mb-2 active`}
              >
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
            <div className="col-10 pl-3">
              <div className="bg-w rounded border p-4">
                <div className="title pb-3">
                  <h3>Favorite</h3>
                </div>
                <div className="line"></div>
                <div className="list-box mt-4">
                  <div className="box-item mb-4">
                    <div className="border rounded p-3 pt-3">
                      <div className="list-products">
                        <a href="/" className="product-item mb-2">
                          <div className="row">
                            <div className="col-1 border rounded p-2 d-flex align-items-center justify-content-center">
                              <img
                                src="../../../../assets/image/clock.png"
                                alt=""
                                className="img-fluid max-width"
                              />
                            </div>
                            <div className="col-8 pl-3 pr-3">
                              <div className="box-title">
                                <h5>
                                  T-shirts with multiple colors, for men and
                                  lady
                                </h5>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">
                                  Genuine iPhone 14 Pro 128GB (VN/A) is now
                                  available at Viet Mobile - Apple's official
                                  authorized dealer in Vietnam. With trendy
                                  design and...
                                </span>
                              </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-end">
                              <div className="d-flex align-items-center">
                                <span>$98.00</span>
                                <div className="">
                                  <button className="btn btn-outline-danger p-4 pt-2 pb-2 ml-3">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
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
export default Favorite;
