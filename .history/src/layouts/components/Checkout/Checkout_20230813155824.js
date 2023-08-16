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
  const [empty, setEmpty] = useState(false);
  const [changeId, setChangeId] = useState({ id: -1, change: -1 });
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping_discount, setShippingDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [addressShip, setAddressShip] = useState({
    id: -1,
    full_info: "",
  });
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

  // useEffect(() => {
  //   console.log(addressShip);
  // }, [addressShip]);

  useEffect(() => {
    if (dataCart && dataProduct) {
      setData([]);
      setTotal(0);
      dataCart.map((item) => {
        dataProduct.map((product) => {
          // console.log(product);
          const detail = product.detail;
          const image = product.image;
          const choose = {
            detail: detail.find(
              (x) => x.MA_SP === item.MA_SP && x.STT == item.STT
            ),
            amount: item.SO_LUONG,
          };
          if (choose.detail != undefined) {
            choose.detail.TEN_SP = product.product.TEN_SP;
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
    if (data.length === 0) {
      setEmpty(true);
      console.log("empty");
    } else {
      setEmpty(false);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(total);
  // }, [total]);

  useEffect(() => {
    if (removeId != -1) {
      console.log(removeId);
      const newData = data.filter(
        (product) => product.detail.MA_SP !== removeId
      );
      setData(newData);
      setRemoveId(-1);
    }
  }, [removeId]);

  useEffect(() => {
    if (changeId.id != -1 && data.length !== 0) {
      console.log(changeId);
      data[changeId.id].amount += changeId.change;
    }
  }, [changeId]);

  const handlePayment = async (typePayment) => {
    console.log(typePayment);
    if (typePayment === "paypal") {
      const itemOrderPayment = [];
      const listOrder = [];
      data.map((product) => {
        const temp = {
          name: product.detail.TEN_SP,
          description: product.detail.TEN_CTSP,
          quantity: `${product.amount}`,
          unit_amount: {
            currency_code: "USD",
            value: `${product.price}`,
          },
        };
        const temp2 = {
          MA_SP: product.detail.MA_SP,
          STT: product.detail.STT,
          SO_LUONG: product.amount,
          GIA: product.price,
        };
        itemOrderPayment.push(temp);
        listOrder.push(temp2);
      });
      const amount = {
        currency_code: "USD",
        value: `${total + tax + shipping - discount - shipping_discount}`,
        breakdown: {
          item_total: {
            currency_code: "USD",
            value: `${total}`,
          },
          shipping: {
            currency_code: "USD",
            value: `${shipping}`,
          },
          tax_total: {
            currency_code: "USD",
            value: `${tax}`,
          },
          shipping_discount: {
            currency_code: "USD",
            value: `${shipping_discount}`,
          },
          discount: {
            currency_code: "USD",
            value: `${discount}`,
          },
        },
      };
      const shippingData = {
        type: "SHIPPING",
        address: {
          address_line_1: addressShip.full_info,
          admin_area_2: "VN",
          country_code: "VN",
        },
      };
      const dataPurchaseUnits = {
        items: itemOrderPayment,
        amount: amount,
        shipping: shippingData,
      };

      const dataUser = {
        id_user: username,
        index_address: addressShip.id,
        total_item: total,
        ship_price: shipping,
        tax_price: tax,
        discount: discount,
        shipping_discount: shipping_discount,
      };

      const paymentData = {
        dataUser,
        formPayment: dataPurchaseUnits,
        listOrder,
        typePayment: "paypal",
      };
      console.log(paymentData);
      // await Payment(paymentData).then((res) => {
      //   console.log(res.data);
      // });
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
                      {data.length === 0 ? (
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "30px",
                            marginBottom: "20px",
                          }}
                        >
                          No Item Order
                        </p>
                      ) : (
                        data.map((product, index) => {
                          return (
                            <CheckOutItem
                              index={index}
                              ProductName={product.detail.TEN_SP}
                              ProductDescription={product.detail.TEN_CTSP}
                              ProductPrice={product.detail.GIA_BAN}
                              ProductAmount={product.amount}
                              ProductId={product.detail.MA_SP}
                              ProductIndex={product.detail.STT}
                              ProductImage={product.image.HINHANH}
                              setTotal={setTotal}
                              setRemoveId={setRemoveId}
                              setChangeId={setChangeId}
                            />
                          );
                        })
                      )}
                    </div>
                    <div className="d-flex justify-content-between pr-3 pl-3 pb-3">
                      <button className="btn btn-outline-primary p-3 pl-2 pt-1 pb-1 d-flex align-items-center">
                        <svg
                          className="left mr-2"
                          data-src="../../../../assets/svg/arrow1.svg"
                        ></svg>
                        Back to Home
                      </button>
                      {data.length !== 0 && (
                        <button className="btn btn-outline-primary p-2 d-flex align-items-center">
                          Remove all
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <NavCheckOut
                  Price={total}
                  handlePayment={handlePayment}
                  setDataModal={setDataModal}
                  handleCloseModal={handleCloseModal}
                  empty={empty}
                  handleClickPayment={handlePayment}
                  setShipping={setShipping}
                  setAddressShip={setAddressShip}
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
