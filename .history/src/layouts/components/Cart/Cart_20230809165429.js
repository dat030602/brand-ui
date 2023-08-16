import React, { useEffect, useState } from "react";

import styles from "./Cart.module.scss";
import { eraseCookie } from "~/utils/cookies";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { getCookie } from "~/utils/cookies";
import { GetCartItem } from "~/services/CheckoutServices";
import { GetAllProducts } from "~/services/ManageProductsServices";
function Cart({ children }) {
  const navigate = useNavigate();
  const linkTo = useNavigate();

  const username = getCookie("Username");
  const [dataCart, setDataCart] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      await GetCartItem(username).then((result) => {
        if (result.message === "success") setDataCart(result.data);
      });
      await GetAllProducts().then((result) => {
        setDataProduct(result);
      });
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (dataCart && dataProduct) {
      setData([]);
      dataCart.map((item) => {
        dataProduct.map((product) => {
          const detail = product.detail;
          const image = product.image;

          const choose = {
            detail: detail.find(
              (x) => x.MA_SP === item.MA_SP && x.STT == item.STT
            ),
            amount: item.SO_LUONG,
          };
          if (choose.detail != undefined) {
            choose.image = image.find(
              (x) => x.MA_SP === item.MA_SP && x.STT == item.STT
            );
            setData((oldData) => [...oldData, choose]);
          }
        });
      });
      setLoad(false);
    }
  }, [dataCart, dataProduct]);

  useEffect(() => {
    if (load == false) {
      if (data.length === 0) {
      } else {
        console.log(data);
      }
    }
  }, [load]);

  const header = () => {
    return (
      <div className="col-2">
        ``
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
            {header()}
            <div className="col-10 pl-3">
              <div className="bg-w rounded border p-4">
                <div className="title pb-3">
                  <h3>My Cart</h3>
                </div>
                <div className="line"></div>
                {load === false ? (
                  <div className="list-box mt-4">
                    <div className="box-item mb-4">
                      <div className="border rounded p-3 pt-3">
                        <div className="list-products">
                          {data.map((product) => {
                            return (
                              <CartItem
                                ProductName={product.detail.TEN_CTSP}
                                ProductPrice={product.detail.GIA_BAN}
                                ProductAmount={product.amount}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div
                        className="d-flex justify-content-center mt-3"
                        // style={{ float: "right" }}
                      >
                        <button
                          className="btn btn-success p-5 pt-2 pb-2"
                          onClick={() => {
                            linkTo("/checkout");
                          }}
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
