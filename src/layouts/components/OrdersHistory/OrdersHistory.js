import React, { useEffect, useState } from 'react';

import styles from './OrdersHistory.module.scss';
import { eraseCookie, getCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { Image } from '~/components/Image';
import * as ManageOrdersServices from '~/services/ManageOrdersServices';

function OrdersHistory({ children }) {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      let result = await ManageOrdersServices.GetOrderHistory(getCookie('Username'));
      setData(result);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row">
            <div className="col-2">
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
            <div className="col-10 pl-3">
              <div className="bg-w rounded border p-4">
                <div className="title pb-3">
                  <h3>Orders History</h3>
                </div>
                <div className="line"></div>
                <div className="list-box mt-4">
                  {/* AAAAAAAAAAAAAAAAAA */}
                  {data !== undefined && 
                    Object.keys(data).map((index) => (
                      <div className="box-item mb-4" key={index}>
                      <div className="border rounded p-3 pt-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <div>
                              <span>Order ID:</span>
                              <span className="ml-1">{data && data[index].voucher.MA_DONHANG}</span>
                              <span className="ml-1 mr-1">•</span>
                              <span className="text-green text-bold-normal">{data && data[index].voucher.TRANGTHAI}</span>
                            </div>
                            <div className="d-flex">
                              <span className="text-gray">Date:</span>
                              <span className="ml-1 text-bold-normal">{data && data[index].voucher.NGAYTAO}</span>
                            </div>
                          </div>
                          <div className="">
                            <button className="btn btn-outline-danger p-4 pt-2 pb-2 ml-2">Cancel</button>
                          </div>
                        </div>
                        <div className="line mt-3 mb-3"></div>
                        <div>
                          <div className="d-flex">
                            <span className="text-gray">Shipping address:</span>
                            <span className="text-bold-normal ml-1">
                            {data && data[index].voucher.SONHA_DUONG}, {data && data[index].voucher.TEN_PHUONG}, {data && data[index].voucher.TEN_THANHPHO}, {data && data[index].voucher.TEN_TINH}
                            </span>
                          </div>
                          <div className="d-flex">
                            <span className="text-gray">Payment:</span>
                            <span className="text-green pl-1 text-bold-normal">{data && data[index].voucher.LOAI_THANHTOAN}</span>
                          </div>
                          <div className="d-flex">
                            <span className="text-gray">Shipping fee:</span>
                            <span className="text-green pl-1 text-bold-normal">${data && data[index].voucher.PHI_GIAO_HANG}</span>
                          </div>
                          <div className="d-flex">
                            <span className="text-gray">Total paid:</span>
                            <span className="text-green pl-1 text-bold-normal">${data && data[index].voucher.TONGTIEN}</span>
                          </div>
                        </div>
                        <div className="line mt-3 mb-3"></div>
                        <div className="list-products">
                          {data[index].history !== undefined &&
                            Object.keys(data[index].history).map((indexchild) => (
                              <a href="/" className="product-item mb-2" key={indexchild}>
                            <div className="row">
                              <div className="col-1 border rounded p-2 d-flex align-items-center justify-content-center">
                                <Image src="../../../../assets/image/clock.png" alt="" className="img-fluid max-width" />
                              </div>
                              <div className="col-9 pl-3 pr-3">
                                <div className="box-title">
                                  <h5>{data[index].history && data[index].history[indexchild].TEN_SP}</h5>
                                </div>
                                <div className="box-description">
                                  <span className="text-gray">{data[index].history && data[index].history[indexchild].TEN_CTSP}</span>
                                </div>
                                <div className="box-description">
                                  <span className="text-gray">x{data[index].history && data[index].history[indexchild].SOLUONG}</span>
                                </div>
                              </div>
                              <div className="col-2">
                                <div className="d-flex flex-column align-items-end">
                                  <span>${data[index].history && data[index].history[indexchild].GIA_BAN}</span>
                                </div>
                              </div>
                            </div>
                          </a>
                            ))
                          
                          }
                        </div>
                      </div>
                      
                    </div>
                    ))
                  }

                  
                </div>
                <div className="d-flex justify-content-end">
                  <nav>
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrdersHistory;
