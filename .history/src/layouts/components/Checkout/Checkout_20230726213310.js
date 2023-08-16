import React, { useEffect, useState } from "react";

import styles from "./Checkout.module.scss";
import axios from "axios";

import { CheckOutItem } from "./CheckOutItem";
import { FavoriteCheckOut } from "./Favorite";
import { NavCheckOut } from "./NavCheckOut";
import { getCookie } from "~/utils/cookies";
import { GetCartItem, GetAddress, Payment } from "~/services/CheckoutServices";
import { GetAllProducts } from "~/services/ManageProductsServices";
function Checkout({ children }) {
  //   const navigate = useNavigate();
  //   const linkTo = useNavigate();

  const username = getCookie("Username");
  const [dataCart, setDataCart] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchApi = async () => {
      await GetCartItem(username).then((result) => {
        setDataCart(result);
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
      // console.log("address2", address);
      dataCart[0].map((item) => {
        // console.log("loading");
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
            // console.log("AAA", choose);
            choose.image = image.find(
              (x) => x.MA_SP === item.MA_SP && x.STT == item.STT
            );
            choose.price = item.SO_LUONG * choose.detail.GIA_BAN;
            setData((oldData) => [...oldData, choose]);
            setTotal((oldData) => oldData + choose.price);
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
        console.log("Data", data);
      }
    }
  }, [load]);

  const handlePayment = (typePayment) => {
    console.log(typePayment);
    if (typePayment === "paypal") {
      const func = async () => {
        const tempData = [];
        data.map((x) => {
          const temp = {
            amount: x.amount,
            MA_SP: x.detail.MA_SP,
            STT: x.detail.STT,
            price: x.price,
          };
          tempData.push(temp);
        });
        console.log(tempData);
        await Payment(tempData);
      };
      func();
    }
  };

  return (
    <>
      <div className="container">
        <div className="main pb-4">
          <div className="pt-4 pb-4">
            <div className={`${styles["title"]} mb-3`}>
              <h3>My Cart</h3>
            </div>
            {load === false ? (
              <div className="row">
                <div className="col-9 pr-3">
                  <div className="bg-w border rounded">
                    <div className="list-box">
                      {data.map((product) => {
                        return (
                          <CheckOutItem
                            ProductName={product.detail.TEN_CTSP}
                            ProductPrice={product.detail.GIA_BAN}
                            ProductAmount={product.amount}
                          />
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-between pr-3 pl-3 pb-3">
                      <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                        <svg
                          className="left mr-2"
                          data-src="../../../../assets/svg/arrow1.svg"
                        ></svg>
                        Back to Home
                      </button>
                      <button className="btn btn-outline-primary p-2 d-flex align-items-center">
                        Remove all
                      </button>
                    </div>
                  </div>
                </div>
                <NavCheckOut Price={total} handlePayment={handlePayment} />
              </div>
            ) : (
              <div>Loading</div>
            )}
          </div>
          {/* <FavoriteCheckOut /> */}
        </div>
      </div>
    </>
  );
}
export default Checkout;
