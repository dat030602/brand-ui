import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { eraseCookie, getCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { Image } from '~/components/Image';
import LoadingPage from '../LoadingPage/LoadingPage';
import { FormatDateAndTime } from '~/utils/FormatDate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as RefundOrdersServices from '~/services/RefundOrderServices';
import styles from './ViewRefundRequest.module.scss';

function ViewRefundRequest({ children }) {
  const navigate = useNavigate();
  const orderID = useParams().id;

  const [orderRefundRequest, setOrderRefundRequest] = useState();
  const [refunddetail, setRefundDetail] = useState([]);

  const [cancelledRefund, setcancelledRefund] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      let result = await RefundOrdersServices.GetOrderRefundRequest(orderID);
      setOrderRefundRequest(result);
      console.log(setOrderRefundRequest);
      let result2 = await RefundOrdersServices.GetRefundDetail(orderID);
      setRefundDetail(result2);
      console.log('begin', result2, 'end', refunddetail);
    };
    fetchApi();
  }, []);

  const handleCancelRefund = async (refundID, orderID) => {
    var result = await RefundOrdersServices.CancelRefund(refundID, orderID);
    if (result.returnValue === 0) {
      toast.error('Error cancel this refund request', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      let result = await RefundOrdersServices.GetOrderRefundRequest(orderID);
      setOrderRefundRequest(result);

      toast.success('Cancel refund request successfully', {
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
  };

  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row">
            <div className="col-2 align-self-start">
              <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                <a href="/">Personal info</a>
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
            <div className="col-10 pl-3 d-flex">
              <div className="col-11 bg-w rounded border p-4">
                <div className="title pb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3>Refund Request Detail</h3>
                    <div className="col-2">
                      <a href="/orders-history" className="btn btn-outline-primary p-4 pt-2 pb-2 ml-2">
                        Go Back
                      </a>
                    </div>
                  </div>
                  <div className="mt-3 line mb-3"></div>
                  <div>
                    {orderRefundRequest === undefined || refunddetail === undefined ? (
                      <LoadingPage />
                    ) : (
                      <div>
                        <div className="ml-2 d-flex align-items-center justify-content-between ">
                          <div>
                            <div>
                              <span className="text-gray">Refund Request ID:</span>
                              <span className="ml-1 text-primary text-bold-normal">
                                {orderRefundRequest[0].MA_HOANTRA}
                              </span>
                              <span className="ml-1 mr-1 text-gray">•</span>
                              <span className="text-primary text-bold-normal">{orderRefundRequest[0].TRANGTHAI}</span>
                            </div>
                            <div className="d-flex">
                              <span className="text-gray">Order ID:</span>
                              <span className="ml-1 text-primary  text-bold-normal">{orderID}</span>
                            </div>

                            <div className="d-flex">
                              <span className="text-gray">Refund Requested DateTime:</span>
                              <span className="ml-1 text-bold-normal">
                                {FormatDateAndTime(orderRefundRequest[0].NGAY_YEU_CAU)}
                              </span>
                            </div>

                            {orderRefundRequest[0].TRANGTHAI === 'Refunded' ? (
                              <div className="d-flex">
                                <span className="text-gray">Refunded DateTime:</span>
                                <span className="ml-1 text-bold-normal">
                                  {FormatDateAndTime(orderRefundRequest[0].NGAY_XU_LY)}
                                </span>
                              </div>
                            ) : null}
                            <div className="d-flex">
                              <span className="text-gray">Payment:</span>
                              <span className="text-primary pl-1 text-bold-normal">
                                {orderRefundRequest[0].LOAI_THANH_TOAN.toUpperCase()}
                              </span>
                            </div>
                            <div className="d-flex">
                              <span className="text-gray">Total refund amount:</span>
                              <span className="text-primary pl-1 text-bold-normal">
                                ${orderRefundRequest[0].SO_TIEN}
                              </span>
                            </div>
                          </div>
                          {orderRefundRequest[0].TRANGTHAI === 'Requested' ? (
                            <div className="col-2">
                              <button
                                data-toggle="modal"
                                data-target="#deleteOrderModal"
                                onClick={() => setcancelledRefund(orderRefundRequest[0].MA_HOANTRA)}
                                className="btn btn-outline-danger p-4 pt-2 pb-2 ml-2"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : null}
                        </div>
                        <div className="line mt-3 mb-3"></div>

                        <div className="ml-2 d-flex align-items-center justify-content-between ">
                          <div>
                            <div className="">
                              <span className="text-gray">Reason to Refund:</span>
                              <span className="text-bold-normal ml-1">{orderRefundRequest[0].LYDO}</span>
                            </div>
                            <div className="d-flex">
                              <span className="text-gray">Additional Details:</span>
                              {orderRefundRequest[0].NOTE !== '' ? (
                                <span className="text-bold-normal ml-1">{orderRefundRequest[0].NOTE}</span>
                              ) : (
                                <span className="text-bold-normal ml-1">Not provided</span>
                              )}
                            </div>
                            <div className="d-flex">
                              <span className="text-gray">Evidence:</span>
                              {orderRefundRequest[0].HINHANH !== '' ? (
                                <a
                                  href={orderRefundRequest[0].HINHANH}
                                  className="col-3 ml-4 border rounded d-inline-flex align-items-center justify-content-begin"
                                >
                                  <Image
                                    src={orderRefundRequest[0].HINHANH}
                                    alt=""
                                    className="img-fluid max-width mx-auto d-block"
                                  />
                                </a>
                              ) : (
                                <span className="text-bold-normal ml-1">No evidence provided</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="line mt-4 mb-3"></div>
                        <div className="list-products">
                          {Object.keys(refunddetail).map((index) => (
                            <a href={`/product/${refunddetail[index].MA_SP}`} className="product-item mb-2">
                              <div className="pt-2 row">
                                <div className=" ml-3 col-2 border rounded p-2 d-flex align-items-center">
                                  <Image
                                    src={refunddetail[index].HINHANH}
                                    alt=""
                                    className="img-fluid max-width mx-auto d-block"
                                  />
                                </div>
                                <div className="col-8 pl-4 pr-3">
                                  <div className="box-title">
                                    <h5>{refunddetail[index].TEN_SP}</h5>
                                  </div>
                                  <div className="box-description">
                                    <span className="text-gray">Category: {refunddetail[index].TEN_CTSP}</span>
                                  </div>
                                </div>
                                <div className="col-1">
                                  <div className="box-title mb-1">
                                    <span className="text-black">x{refunddetail[index].SO_LUONG}</span>
                                  </div>
                                  <div className="box-description">
                                    <span className="text-primary">${refunddetail[index].DON_GIA}</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteOrderModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="deleteOrderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteOrderModalLabel">
                Cancel Refund Request: {cancelledRefund} of Order {orderID} ?
              </h5>
              <button type="button" className="close" aria-label="Close">
                {/* data-dismiss="modal" */}
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Are you sure about that?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => handleCancelRefund(cancelledRefund, orderID, 'Cancelled')}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
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
      />{' '}
    </>
  );
}
export default ViewRefundRequest;
