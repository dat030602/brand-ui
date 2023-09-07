import React, { Fragment, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormatDateAndTime, FormatDate } from '~/utils/FormatDate';

import LoadingPage from '../LoadingPage/LoadingPage';
import * as ManageOrdersServices from '~/services/ManageOrdersServices';
import styles from './ManageOrders.module.scss';
import { Image } from '~/components/Image';

function ManageOrders({ children }) {
  const [orderdata, setOrderData] = useState();
  const [orderdetail, setOrderDetail] = useState();

  const [selectedorder, setSelectedOrder] = useState(0);
  const [cancelledorder, setCancelledOrder] = useState(0);

  const [orderRefundRequest, setOrderRefundRequest] = useState(null);
  const [refunddetail, setRefundDetail] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      let result = await ManageOrdersServices.GetAllOrders();
      setOrderData(result);
    };
    fetchApi();
  }, []);

  const handleDetailClick = async (orderId) => {
    const order = orderdata.find((order) => order.MA_DONHANG === orderId);
    if (order) {
      setSelectedOrder([order]);
      let result2 = await ManageOrdersServices.GetOrderDetail(order.MA_DONHANG);
      setOrderDetail(result2);
    } else {
      console.log('Order not found');
    }
  };

  const handleViewRefundClick = async (orderId) => {
    let result = await ManageOrdersServices.GetOrderRefundRequest(orderId);
    setOrderRefundRequest(result);
    let result2 = await ManageOrdersServices.GetRefundDetail(orderId);
    setRefundDetail(result2);
  };

  const handleUpdateOrderStatus = async (slug, slug1) => {
    var result = await ManageOrdersServices.UpdateOrderStatus(slug, slug1);

    if (result.returnValue === 0) {
      toast.error("We can't update", {
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
      let result = await ManageOrdersServices.GetAllOrders();
      setOrderData(result);
    }
  };

  const fetchUpdatedData = async (orderId) => {
    try {
      const updatedOrderRefundRequest = await ManageOrdersServices.GetOrderRefundRequest(orderId);
      setOrderRefundRequest(updatedOrderRefundRequest);

      const updatedOrderData = await ManageOrdersServices.GetAllOrders();
      setOrderData(updatedOrderData);
    } catch (error) {
      console.error('Error fetching updated data:', error);
    }
  };

  const handleUpdateRefundStatus = async (orderId, orderstatus, refundstatus) => {
    var result = await ManageOrdersServices.UpdateRefundStatus(orderId, orderstatus, refundstatus);
    if (refundstatus === 'Accepted') {
      if (result.returnValue === 0) {
        toast.error('Error refunding this order', {
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
        fetchUpdatedData(orderId);
        toast.success('Refund order successfully', {
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
    } else if (refundstatus === 'Rejected') {
      if (result.returnValue === 0) {
        toast.error('Error rejected this order', {
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
        fetchUpdatedData(orderId);
        toast.success('Reject refunding order successfully', {
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
    }
  };

  return (
    <>
      <nav className={`${styles['side-menu']} bg-w border`}>
        <div className={`${styles['box-user']} d-flex align-items-center pl-4 pt-4`}>
          <div className={`${styles['box-image']} pr-3`}>
            <Image src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg" alt="" />
          </div>

          <div className={`${styles['user-name']} d-flex flex-column`}>
            <span className="text-bold-normal">Gavano</span>
            <span className="text-gray">Admin</span>
          </div>
        </div>
        <div className={`${styles['list-box']} mt-4 mb-2`}>
          <a href="/dashboard" className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}>
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/Dashboard.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Dashboard</div>
            <div className="box-rectangle"></div>
          </a>
          <a
            href="/manage-products"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}
          >
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/product.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Products</div>
            <div className="box-rectangle"></div>
          </a>
          <a
            href="/manage-customers"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}
          >
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/Customer.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Customers</div>
            <div className="box-rectangle"></div>
          </a>
          <a
            href="#"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center ${styles['active']}`}
          >
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/order.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Orders</div>
            <div className="box-rectangle"></div>
          </a>
          <a
            href="/manage-vouchers"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}
          >
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/voucher.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Vouchers</div>
            <div className="box-rectangle"></div>
          </a>
        </div>
        <div className="line"></div>
        <div className={`${'list-box'} mt-2`}>
          <a href="/" className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}>
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/setting.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Settings</div>
            <div className="box-rectangle"></div>
          </a>
        </div>
      </nav>
      {orderdata === undefined ? (
        <LoadingPage />
      ) : (
        <div className="container">
          <div className="main pt-4 pb-4">
            <div className="pl-3 pr-3">
              <div className="bg-w border rounded">
                <div className="p-3">
                  <div className="header d-flex align-items-center justify-content-between">
                    <div className="title">
                      <h5>Orders ({orderdata.length})</h5>
                    </div>
                  </div>
                  {orderdata.length > 0 ? (
                    <section className="ftco-section">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-wrap">
                              <table className="table">
                                <thead className="thead-primary">
                                  <tr>
                                    <th className="text-center">Order ID</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Shipping address</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orderdata !== undefined &&
                                    Object.keys(orderdata).map((index) => (
                                      <tr>
                                        <td className="">
                                          <p className="par-line-1 text-center">{orderdata[index].MA_DONHANG}</p>
                                        </td>
                                        <td className="text-center">
                                          <div className="overflow-hidden">
                                            <p className="text-center">{FormatDate(orderdata[index].NGAYTAO)}</p>
                                          </div>
                                        </td>
                                        <td className="text-center">
                                          <div className="overflow-hidden">
                                            <p className="text-center">{orderdata[index].DIACHI}</p>
                                          </div>
                                        </td>
                                        <td className="text-center">
                                          <p className="par-line-1 text-center">{orderdata[index].TRANGTHAI}</p>
                                        </td>
                                        <td className="d-flex align-items-center justify-content-center">
                                          <button
                                            className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-detail"
                                            data-toggle="modal"
                                            data-target="#orderDetailModal"
                                            onClick={() => handleDetailClick(orderdata[index].MA_DONHANG)}
                                          >
                                            Detail
                                          </button>
                                          {orderdata[index].TRANGTHAI === 'Received' ? (
                                            <button
                                              className="btn ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-info"
                                              onClick={() =>
                                                handleUpdateOrderStatus(orderdata[index].MA_DONHANG, 'Processing')
                                              }
                                            >
                                              Processing
                                            </button>
                                          ) : null}

                                          {orderdata[index].TRANGTHAI === 'Received' ||
                                          orderdata[index].TRANGTHAI === 'Pending' ? (
                                            <button
                                              className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
                                              data-toggle="modal"
                                              data-target="#deleteOrderModal"
                                              onClick={() => setCancelledOrder(orderdata[index])}
                                            >
                                              Cancel
                                            </button>
                                          ) : null}
                                          {orderdata[index].TRANGTHAI === 'Processing' ? (
                                            <button
                                              className="btn ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn btn-primary"
                                              onClick={() =>
                                                handleUpdateOrderStatus(orderdata[index].MA_DONHANG, 'Shipped')
                                              }
                                            >
                                              In Delivery
                                            </button>
                                          ) : null}
                                          {orderdata[index].TRANGTHAI === 'Shipped' ? (
                                            <button
                                              className="btn ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-success"
                                              onClick={() =>
                                                handleUpdateOrderStatus(orderdata[index].MA_DONHANG, 'Delivered')
                                              }
                                            >
                                              Delivered
                                            </button>
                                          ) : null}
                                          {orderdata[index].TRANGTHAI === 'Request Refund' ||
                                          orderdata[index].TRANGTHAI === 'Refunded' ||
                                          orderdata[index].TRANGTHAI === 'Refund Cancelled' ? (
                                            <button
                                              className="btn ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-view"
                                              data-toggle="modal"
                                              data-target="#orderRefundRequestModal"
                                              onClick={() => handleViewRefundClick(orderdata[index].MA_DONHANG)}
                                            >
                                              View Request
                                            </button>
                                          ) : null}
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : (
                    <p>No orders available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="orderDetailModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="orderDetailModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderDetailModalTitle">
                Order Detail
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {orderdetail && selectedorder && (
                <div className="box-item mb-4">
                  <div className="border rounded p-3 pt-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div>
                          <span className="text-gray">Order ID:</span>
                          <span className="ml-1">{selectedorder[0].MA_DONHANG}</span>
                          <span className="ml-1 mr-1">•</span>
                          <span className="text-primary text-bold-normal">{selectedorder[0].TRANGTHAI}</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Order DateTime:</span>
                          <span className="ml-1 text-bold-normal">{FormatDateAndTime(selectedorder[0].NGAYTAO)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="line mt-3 mb-3"></div>
                    <div>
                      <div className="d-flex">
                        <span className="text-gray">Customer:</span>
                        <span className="text-bold-normal ml-1">{orderdata[0].HO_TEN}</span>
                      </div>
                      <div className="d-flex">
                        <span className="text-gray">Shipping address:</span>
                        <span className="text-bold-normal ml-1">{selectedorder[0].DIACHI}</span>
                      </div>
                      <div className="d-flex">
                        <span className="text-gray">Payment:</span>
                        <span className="text-primary pl-1 text-bold-normal">{selectedorder[0].LOAI_THANHTOAN}</span>
                      </div>
                      <div className="d-flex">
                        <span className="text-gray">Shipping fee:</span>
                        <span className="text-primary pl-1 text-bold-normal">${selectedorder[0].PHI_GIAO_HANG}</span>
                      </div>
                      <div className="d-flex">
                        <span className="text-gray">Total paid:</span>
                        <span className="text-primary pl-1 text-bold-normal">${selectedorder[0].TONGTIEN}</span>
                      </div>
                    </div>
                    <div className="line mt-3 mb-3"></div>

                    <div className="list-products">
                      {Object.keys(orderdetail).map((index) => (
                        <a href={`/product/${orderdetail[index].MA_SP}`} className="product-item mb-2">
                          <div className="row">
                            <div className="col-3 border rounded p-2 d-flex align-items-center">
                              <Image
                                src={orderdetail[index].HINHANH}
                                alt=""
                                className="img-fluid max-width mx-auto d-block"
                              />
                            </div>
                            <div className="col-7 pl-3 pr-3">
                              <div className="box-title">
                                <h5>{orderdetail[index].TEN_SP}</h5>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">Category: {orderdetail[index].TEN_CTSP}</span>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">x{orderdetail[index].SOLUONG}</span>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="d-flex flex-column align-items-end">
                                <span>${orderdetail[index].GIA}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* VIEW REQUEST MODAL */}
      <div
        className="modal fade"
        id="orderRefundRequestModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="orderRefundRequestModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderDetailModalTitle">
                Refund Request Detail
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {orderRefundRequest && refunddetail && (
                <div className="box-item mb-4">
                  <div className="border rounded p-3 pt-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div>
                          <span className="text-gray">Refund Request ID:</span>
                          <span className="ml-1 text-primary text-bold-normal">{orderRefundRequest[0].MA_HOANTRA}</span>
                          <span className="ml-1 mr-1 text-gray">•</span>
                          <span className="text-primary text-bold-normal">{orderRefundRequest[0].TRANGTHAI}</span>
                        </div>
                        <div>
                          <span className="text-gray">Order ID:</span>
                          <span className="ml-1 text-primary text-bold-normal">{orderRefundRequest[0].MA_DDH}</span>
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
                          <span className="text-gray">Customer:</span>
                          <span className="text-bold-normal ml-1">{orderdata[0].HO_TEN}</span>
                        </div>
                      </div>
                    </div>
                    <div className="line mt-3 mb-3"></div>
                    <div>
                      <div className="d-flex">
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
                            className="col-3 ml-4 border rounded d-flex align-items-center"
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

                      <div className="d-flex">
                        <span className="text-gray">Payment:</span>
                        <span className="text-primary pl-1 text-bold-normal">
                          {orderRefundRequest[0].LOAI_THANHTOAN}
                        </span>
                      </div>
                      {/* <div className="d-flex">
                        <span className="text-gray">Shipping fee:</span>
                        <span className="text-primary pl-1 text-bold-normal">{selectedorder[0].PHI_GIAO_HANG}</span>
                      </div> */}
                      <div className="d-flex">
                        <span className="text-gray">Total refund amount:</span>
                        <span className="text-primary pl-1 text-bold-normal">${orderRefundRequest[0].SO_TIEN}</span>
                      </div>
                    </div>
                    <div className="line mt-3 mb-3"></div>

                    <div className="list-products">
                      {Object.keys(refunddetail).map((index) => (
                        <a href={`/product/${refunddetail[index].MA_SP}`} className="product-item mb-2">
                          <div className="row">
                            <div className="col-3 border rounded p-2 d-flex align-items-center">
                              <Image
                                src={refunddetail[index].HINHANH}
                                alt=""
                                className="img-fluid max-width mx-auto d-block"
                              />
                            </div>
                            <div className="col-7 pl-3 pr-3">
                              <div className="box-title">
                                <h5>{refunddetail[index].TEN_SP}</h5>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">Category: {refunddetail[index].TEN_CTSP}</span>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">x{refunddetail[index].SO_LUONG}</span>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="d-flex flex-column align-items-end">
                                <span>${refunddetail[index].DON_GIA}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {orderRefundRequest != null && orderRefundRequest[0].TRANGTHAI === 'Requested' ? (
                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleUpdateRefundStatus(orderRefundRequest[0].MA_DDH, 'Refunded', 'Accepted')}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="ml-2 btn btn-danger"
                    onClick={() =>
                      handleUpdateRefundStatus(orderRefundRequest[0].MA_DDH, 'Refund Rejected', 'Rejected')
                    }
                  >
                    Reject
                  </button>
                </div>
              ) : null}
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
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
                Cancel order: {cancelledorder.MA_DONHANG}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Are you sure about that?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => handleUpdateOrderStatus(cancelledorder.MA_DONHANG, 'Cancelled')}
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
      />
      {orderdata === undefined && <LoadingPage />}
    </>
  );
}
export default ManageOrders;
