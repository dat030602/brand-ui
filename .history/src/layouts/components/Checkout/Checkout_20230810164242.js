import React, { useEffect, useState } from "react";

import styles from "./Checkout.module.scss";
import axios from "axios";

import { CheckOutItem } from "./components/CheckOutItem";
import { FavoriteCheckOut } from "./components/Favorite";
import { NavCheckOut } from "./components/NavCheckOut";
import { getCookie } from "~/utils/cookies";
import { GetCartItem, GetAddress, Payment } from "~/services/CheckoutServices";
import { GetAllProducts } from "~/services/ManageProductsServices";
function Checkout({ setDataModal, handleCloseModal }) {
  //   const navigate = useNavigate();
  //   const linkTo = useNavigate();

  const username = getCookie("Username");
  const [dataCart, setDataCart] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  const [removeId, setRemoveId] = useState(-1);
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
      setTotal(0);
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
            choose.price = choose.detail.GIA_BAN;
            setData((oldData) => [...oldData, choose]);
            setTotal((oldData) => oldData + choose.price * item.SO_LUONG);
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
      }
    }
  }, [load]);

  useEffect(() => {
    console.log(total);
  }, [total]);

  useEffect(() => {
    if (removeId != -1) {
      const newData = data.filter(
        (product) => product.detail.MA_SP === removeId
      );
      setData(newData);
      setRemoveId(-1);
    }
  }, [removeId]);

  const handlePayment = (typePayment) => {
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
        await Payment(tempData).then((res) => console.log(res));
      };
      func();
    }
  };

  return (
    <>
      <div className="container">
        <div className="main pb-4" style={{ width: "1350px" }}>
          <div className="pt-4 pb-4">
            {load === false ? (
              <div className="row">
                <div className="col-9 pr-3">
                  <div className={`${styles["title"]} mb-3`}>
                    <h3>Product Order</h3>
                  </div>
                  <div className="bg-w border rounded">
                    <div className="list-box">
                      {data.map((product) => {
                        return (
                          <CheckOutItem
                            ProductName={product.detail.TEN_CTSP}
                            ProductPrice={product.detail.GIA_BAN}
                            ProductAmount={product.amount}
                            ProductId={product.detail.MA_SP}
                            ProductIndex={product.detail.STT}
                            ProductImage={product.image.HINHANH}
                            setTotal={setTotal}
                            setRemoveId={setRemoveId}
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
                <NavCheckOut
                  Price={total}
                  handlePayment={handlePayment}
                  setDataModal={setDataModal}
                  handleCloseModal={handleCloseModal}
                />
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
