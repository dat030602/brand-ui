import React, { useEffect } from "react";

import styles from "../Checkout.module.scss";
export const FavoriteCheckOut = () => {
  return (
    <div className={`${styles["recomment"]} p-4 bg-w rounded border`}>
      <div className={`${styles["title"]} par-line-2`}>
        <h5>Favorite</h5>
      </div>
      <div className="row">
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-100"></div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className={`${styles["col"]} col`}>
          <a href="/">
            <div className={`${styles["recomment-item"]} p-3`}>
              <div className={`${styles["recomment-item-img"]}`}>
                <div
                  className="background-img pt-100p"
                  style={{
                    backgroundImage:
                      "url('../../../../assets/image/clock.png')",
                  }}
                ></div>
              </div>
              <div className={`${styles["recomment-item-content"]}`}>
                <div className={`${"price"}`}>$10.30</div>
                <div className={`${styles["name"]} overflow-hidden mt-1`}>
                  <h5 className="par-line-2">
                    T-shirts with multiple colors, for men
                  </h5>
                </div>
                <div className="mt-4">
                  <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                    <svg
                      className=""
                      data-src="../../../../assets/svg/cart.svg"
                    ></svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-primary p-5 pt-2 pb-2">
          See more
        </button>
      </div>
    </div>
  );
};
