import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RefundOrder.module.scss';
import { eraseCookie, getCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { Image } from '~/components/Image';
import * as RefundOrderServices from '~/services/RefundOrderServices';

function RefundOrder() {
  const navigate = useNavigate();

  const quantityInputRefs = useRef({});
  const totalRefundElement = useRef(null);

  const orderID = useParams().id;
  // const orderID = 'DH0';
  // console.log('id', useParams().id);

  const [requestRefund, setRefund] = useState({
    lydo: '',
    items: [],
    maddh: orderID,
    makhach: getCookie('Username'),
    image: '',
    note: '',
    // sotien: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const [orderItems, setOrderItems] = useState();
  const [orderdata, setOrderdata] = useState([]);
  useEffect(() => {
    const fetchOrderItems = async () => {
      try {
        const response2 = await fetch(`http://localhost:5000/manage-orders/${orderID}`);
        const data2 = await response2.json();
        setOrderdata(data2);
        const response = await fetch(`http://localhost:5000/manage-orders/${orderID}/order-detail`);
        const data = await response.json();
        setOrderItems(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };
    fetchOrderItems();
  }, [orderID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setRefund((prevRefund) => ({ ...prevRefund, sotien: parseFloat(totalRefundElement.current.innerText) }));
    console.log('final', requestRefund);

    var result = await RefundOrderServices.AddNewRefundRequest(requestRefund);
    if (result.data.returnValue === 1) {
      console.log('addnew');
      setSubmitted(true);
    } else {
      console.log('fail');
    }
  };

  const handleOnChangeAddRefund = (e) => {
    const { value, name } = e.target;
    if (name === 'reason') {
      setRefund((pre) => ({ ...pre, lydo: value }));
    } else if (name === 'note') {
      setRefund((pre) => ({ ...pre, note: value }));
    } else if (name === 'image') {
      setRefund((pre) => ({ ...pre, image: e.target.files[0] }));
    }
  };

  const handleTickChange = (MA_SP, STT, GIA) => {
    const SOLUONG = parseInt(quantityInputRefs.current[`${MA_SP}_${STT}`].value, 10) || 0;

    setRefund((prevRefund) => {
      const isChecked = prevRefund.items.some((item) => item.MA_SP === MA_SP && item.STT === STT);

      if (isChecked) {
        const updatedItems = prevRefund.items.filter((item) => !(item.MA_SP === MA_SP && item.STT === STT));
        return {
          ...prevRefund,
          items: updatedItems,
        };
      } else {
        const newItem = { MA_SP, STT, GIA, SOLUONG };
        return {
          ...prevRefund,
          items: [...prevRefund.items, newItem],
        };
      }
    });
  };

  const handleQuantityChange = (MA_SP, STT) => {
    const SOLUONG = parseInt(quantityInputRefs.current[`${MA_SP}_${STT}`].value, 10) || 0;
    setRefund((prevRefund) => ({
      ...prevRefund,
      items: prevRefund.items.map((item) => (item.MA_SP === MA_SP && item.STT === STT ? { ...item, SOLUONG } : item)),
    }));
  };

  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row">
            <div className="col-2 align-self-start">
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <a href="/info">Personal info</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <a href="/my-cart">My cart</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <a href="/favorite">Favorite</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 ${styles['active']}`}>
                <a href="/orders-history">Orders history</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <a href="/loyalty">Loyalty Program</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 active`}>
                <a href="/personal/edit">Profile setting</a>
              </div>
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <button
                  onClick={() => {
                    eraseCookie('Name');
                    eraseCookie('Username');
                    eraseCookie('Token');
                    navigate('/');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Log out
                </button>
              </div>
            </div>
            <div className="col-8 pl-3 d-flex">
              <div className="col-11 bg-w rounded border p-4">
                <div className="title pb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3>Refund Request Detail</h3>
                    <div className="col-3 align-items-center">
                      <a href="/orders-history" className="btn btn-outline-primary p-4 pt-2 pb-2 ml-2">
                        Go Back
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 line"></div>
                  <div>
                    <div className="d-flex align-items-center justify-content-between mt-3 pl-2">
                      <div>
                        <div className="d-flex">
                          <span className="text-gray">Order ID:</span>
                          <span className="ml-1 text-black text-bold-normal">{orderID}</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Delivered Date:</span>
                          <span className="ml-1 text-bold-normal">{orderdata[0].NGAY_GIAO_HANG}</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Payment:</span>
                          <span className="text-green pl-1 text-bold-normal">{orderdata[0].LOAI_THANH_TOAN}</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Total paid:</span>
                          <span className="text-green pl-1 text-bold-normal">${orderdata[0].TONGTIEN}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 list-products">
                      {orderItems.map((item) => (
                        <div className="product-item mb-4 mt-4">
                          <div className="row">
                            <div className="col-1 d-flex align-items-center justify-content-center">
                              <label className={`${styles['refund-checkbox']}`}>
                                <input
                                  type="checkbox"
                                  checked={requestRefund.items.some(
                                    (checkedItem) => checkedItem.MA_SP === item.MA_SP && checkedItem.STT === item.STT,
                                  )}
                                  onChange={(e) => handleTickChange(item.MA_SP, item.STT, item.GIA)}
                                  disabled={submitted}
                                />
                                <span className={`${styles['checkmark']}`}></span>
                              </label>
                            </div>

                            <div className="col-1 border rounded p-2 d-inline-flex align-items-center justify-content-center">
                              <a href={`/product/${item.MA_SP}`}>
                                <Image src={item.HINHANH} alt="" className="img-fluid max-width" />
                              </a>
                            </div>
                            <div className="col-7 pl-3">
                              <a href={`/product/${item.MA_SP}`}>
                                <div className="box-title">
                                  <h5 href>{item.TEN_SP}</h5>
                                </div>
                                <div className="box-description">
                                  <span className="text-gray">Category: {item.TEN_CTSP}</span>
                                </div>
                                <div className="box-description">
                                  <span className="text-gray">x{item.SOLUONG}</span>
                                </div>
                              </a>
                            </div>
                            <div className="col-2">
                              {/* <span>Refund Amount</span> Display refunded amount */}
                              <div className="d-inline-flex flex-column align-items-begin">
                                <input
                                  ref={(el) => (quantityInputRefs.current[`${item.MA_SP}_${item.STT}`] = el)}
                                  type="number"
                                  defaultValue={1}
                                  min={1}
                                  max={item.SOLUONG}
                                  onKeyDown={(e) => e.preventDefault()}
                                  className={styles['custom-input']}
                                  onChange={(e) => handleQuantityChange(item.MA_SP, item.STT, item.GIA)}
                                />
                              </div>
                            </div>
                            <div className="col-1 d-inline-flex flex-row-reverse">${item.GIA}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <div className="d-flex">
                        <span className="ml-1 text-bold-normal">Reason for Refund:</span>
                        <select
                          className="col-9 border rounded"
                          name="reason"
                          style={{ marginLeft: '0.75rem' }}
                          onChange={(e) => handleOnChangeAddRefund(e)}
                          required
                          disabled={submitted}
                        >
                          <option value="">Select a reason</option>
                          <option value="Wrong Item Received">Wrong Item Received</option>
                          <option value="Item Damaged">Item Damaged</option>
                          <option value="Changed Mind">Changed Mind</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <span className="ml-1 text-bold-normal">Additional Details:</span>
                      <textarea
                        className="col-9 border rounded ml-3"
                        name="note"
                        disabled={submitted}
                        onChange={(e) => handleOnChangeAddRefund(e)}
                        rows="2"
                        style={{ padding: '5px' }}
                      />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <span className="ml-1 text-bold-normal mr-3">Upload Evidence (if applicable):</span>
                      <input
                        disabled={submitted}
                        name="image"
                        type="file"
                        onChange={(e) => handleOnChangeAddRefund(e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 ml-2 bg-w rounded border pl-3 pr-3" style={{ height: 'fit-content' }}>
                <div className="box-title mt-3">
                  <h4>Summary</h4>
                </div>
                <div className="box-description mt-3">
                  {requestRefund.items.length > 0 ? (
                    <>
                      <div className="d-inline-flex justify-content-between align-items-center">
                        <span>Items Subtotal: </span>
                        <span style={{ marginLeft: '52px' }}>
                          ${requestRefund.items.reduce((total, item) => total + item.GIA * item.SOLUONG, 0)}
                        </span>
                      </div>
                      <div className="text-gray">
                        {requestRefund.items.reduce((amount, item) => amount + item.SOLUONG, 0)} item
                      </div>
                      <div className="line mt-3 mb-3"> </div>
                      <div className="d-inline-flex justify-content-between align-items-center">
                        <span>Refund Gateway:</span>
                        <span style={{ marginLeft: '40px' }}>Paypal</span>
                      </div>
                      <div className="box-description mt-2">
                        <span>Total Refund:</span>
                        {/* <span style={{ marginLeft: '65px' }}>
                          ${requestRefund.items.reduce((total, item) => total + item.GIA * item.SOLUONG, 0)} */}
                        <span style={{ marginLeft: '65px' }}>$</span>
                        <span ref={totalRefundElement}>
                          {requestRefund.items.reduce((total, item) => total + item.GIA * item.SOLUONG, 0)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <span className="text-gray">No items selected</span>
                  )}
                  <div className="d-flex justify-content-center mt-4 mb-4">
                    {submitted ? (
                      <div className="text-primary text-bold-normal text-center">
                        <a href={`/orders-history/${orderID}/refund/detail`} className="">
                          Refund request is submitted. We will review it shortly.
                        </a>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <button
                          disabled={requestRefund.items.length === 0 || requestRefund.lydo.trim() === ''}
                          type="submit"
                          className=" btn btn-primary"
                        >
                          Request Refund
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default RefundOrder;
