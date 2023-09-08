import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Checkout.module.scss';
import axios from 'axios';

import { CheckOutItem } from './components/CheckOutItem';
import { FavoriteCheckOut } from './components/Favorite';
import { NavCheckOut } from './components/NavCheckOut';
import { getCookie } from '~/utils/cookies';
import { GetCartItem, GetAddress, Payment } from '~/services/CheckoutServices';
import { GetAllProducts } from '~/services/ManageProductsServices';
import { useNavigate } from 'react-router-dom';
function Checkout({ setDataModal, handleCloseModal }) {
  //   const navigate = useNavigate();
  const linkTo = useNavigate();

  const username = getCookie('Username');
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
  const [coinChoose, setCoinChoose] = useState(false);

  const [addressShip, setAddressShip] = useState({
    id: -1,
    full_info: '',
  });
  const [idVoucher, setIdVoucher] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      await GetCartItem(username).then((result) => {
        if (result.message === 'success') setDataCart(result.data);
        console.log(result);
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
            detail: detail.find((x) => x.MA_SP === item.MA_SP && x.STT == item.STT),
            amount: item.SO_LUONG,
          };
          if (choose.detail != undefined) {
            choose.detail.TEN_SP = product.product.TEN_SP;
            choose.image = image.find((x) => x.MA_SP === item.MA_SP && x.STT == item.STT);
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
      console.log('empty');
    } else {
      setEmpty(false);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(total);
  // }, [total]);

  useEffect(() => {
    if (removeId != -1) {
      const newData = data.filter((product) => product.detail.MA_SP !== removeId);
      console.log('new: ', newData);
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
    toast.loading('Creating order .\n Please wait', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    const data_User = {
      id_user: username,
      index_address: addressShip.index,
      shipping_discount_id: idVoucher,
      payment_method: typePayment,
      is_Use_Coin: coinChoose,
    };
    const list_Item_Order = [];
    data.map((product) => {
      const product_Detail = {
        MA_SP: product.detail.MA_SP,
        STT: product.detail.STT,
        SL: product.amount,
      };
      list_Item_Order.push(product_Detail);
    });

    const paymentData = {
      data_User,
      list_Item_Order,
    };
    console.log(paymentData);
    if (typePayment === 'paypal') {
      await Payment(paymentData).then((res) => {
        if (res.data.status === 'success') {
          handleCloseModal();
          toast.success('Create order successfully.\n Please pay in 6 hours', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          window.location.href = '/orders-history';
          window.open(res.data.linkPayment, '_blank', 'noopener,noreferrer');
        } else {
          toast.error('Error while creating order.\n Please try again', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
    }
    if (typePayment === 'vnpay') {
      await Payment(paymentData).then((res) => {
        console.log(res);
        if (res.data.status === 'success') {
          handleCloseModal();
          toast.success('Create order successfully.\n Please pay in 6 hours', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          window.location.href = '/orders-history';
          window.open(res.data.linkVnPay, '_blank', 'noopener,noreferrer');
        } else {
          toast.error('Error while creating order.\n Please try again', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="main pb-4" style={{ width: '1350px' }}>
          <div className="pt-4 pb-4">
            {load === false ? (
              <div className="row" style={{ alignItems: 'normal' }}>
                <div className="col-9 pr-3">
                  <div className={`${styles['title']} mb-3 row`}>
                    <div className="col-5">
                      <h3>Product Order</h3>
                    </div>
                    <div className="col-2" style={{ textAlign: 'center', margin: 'auto' }}>
                      <span style={{ color: '#bbb' }}>Unit Price</span>
                    </div>
                    <div className="col-2" style={{ textAlign: 'center', margin: 'auto' }}>
                      <span style={{ color: '#bbb' }}>Amount</span>
                    </div>
                    <div style={{ textAlign: 'center', width: '25%', margin: 'auto' }}>
                      <span style={{ color: '#bbb' }}>Item Subtotal</span>
                    </div>
                  </div>
                  <div className="bg-w border rounded">
                    <div className="list-box">
                      {data.length === 0 ? (
                        <p
                          style={{
                            textAlign: 'center',
                            fontSize: '30px',
                            marginBottom: '20px',
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
                        <svg className="left mr-2" data-src="../../../../assets/svg/arrow1.svg"></svg>
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
                {data.length != 0 && (
                  <NavCheckOut
                    Price={total}
                    handlePayment={handlePayment}
                    setDataModal={setDataModal}
                    handleCloseModal={handleCloseModal}
                    empty={empty}
                    handleClickPayment={handlePayment}
                    setShipping={setShipping}
                    setAddressShip={setAddressShip}
                    setIdVoucher={setIdVoucher}
                    setCoinChoose={setCoinChoose}
                  />
                )}
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
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
