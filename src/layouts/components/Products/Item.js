import React from "react";

import styles from "./Products.module.scss";

function Item(data = {}) {
    //console.log(data.data);
    const data1= data.data;
    return (
        <div className={`${styles["products-item"]}`}>
            <div className={`${styles["product"]} row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3`}>
                <a
                    href="/product"
                    className={`${styles["product-image"]}`}
                >
                    <div
                        className="background-img pt-100p"
                        style={{
                            backgroundImage:
                                "url('../../../../assets/image/clock.png')",
                        }}
                    ></div>
                </a>
                <div className={`${styles["product-content"]} p-3 d-flex`}>
                    <a
                        href="/product"
                        className={`${styles["product-content-cover"]} pb-2`}
                    >
                        <div className={`${styles["product-name"]} par-line-2`}>
                            {data1 && data1.TEN_SP}
                        </div>
                        <div className={`${styles["product-about"]}`}>
                            <div className={`${styles["price"]}`}>
                                <span>$998.00</span>
                                <span>$1128.00</span>
                            </div>
                            <div className={`${styles["product-about"]} d-flex`}>
                                <div className={`${styles["product-star"]} d-flex`}>
                                    <div className="svg-star d-flex">
                                        <svg
                                            className="star"
                                            data-src="../../../../assets/svg/star.svg"
                                        ></svg>
                                        <svg
                                            className="star"
                                            data-src="../../../../assets/svg/star.svg"
                                        ></svg>
                                        <svg
                                            className="star"
                                            data-src="../../../../assets/svg/star.svg"
                                        ></svg>
                                        <svg
                                            className="star"
                                            data-src="../../../../assets/svg/star.svg"
                                        ></svg>
                                        <svg
                                            className="star"
                                            data-src="../../../../assets/svg/star.svg"
                                        ></svg>
                                    </div>
                                    <div className={`${styles["product-point"]}`}>
                                        {data1 && data1.RATING}
                                    </div>
                                </div>
                                <div className={`${styles["product-sale"]}`}>
                                    <span>•</span>
                                    <span>
                                        {data1 && data1.SL_DA_BAN} orders
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["product-description"]} mt-2 mb-2 overflow-hidden`}>
                            <span className="par-line-2">
                                {data1 && data1.MO_TA}
                            </span>
                        </div>
                    </a>
                    <div className={`${styles["product-favorite"]} ${styles["active"]}`}>
                        <button>
                            <svg
                                className="star btn"
                                data-src="../../../../assets/svg/heart.svg"
                            ></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Item;