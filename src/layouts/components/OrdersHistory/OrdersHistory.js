import React from 'react';

import styles from './OrdersHistory.module.scss';
import { eraseCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { Image } from '~/components/Image';

function OrdersHistory({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="row align-items-start">
            <div className="col-2">
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
                  <div className="box-item mb-4">
                    <div className="border rounded p-3 pt-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <div>
                            <span>Order ID:</span>
                            <span className="ml-1">8924</span>
                            <span className="ml-1 mr-1">•</span>
                            <span className="text-green text-bold-normal">Confirm</span>
                          </div>
                          <div className="d-flex">
                            <span className="text-gray">Date:</span>
                            <span className="ml-1 text-bold-normal">16 December 2018</span>
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
                            3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808
                          </span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Payment:</span>
                          <span className="text-green pl-1 text-bold-normal">Visa **** 4216</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Shipping fee:</span>
                          <span className="text-green pl-1 text-bold-normal">$56</span>
                        </div>
                        <div className="d-flex">
                          <span className="text-gray">Total paid:</span>
                          <span className="text-green pl-1 text-bold-normal">$456</span>
                        </div>
                      </div>
                      <div className="line mt-3 mb-3"></div>
                      <div className="list-products">
                        <a href="/" className="product-item mb-2">
                          <div className="row">
                            <div className="col-1 border rounded p-2 d-flex align-items-center justify-content-center">
                              <Image src="../../../../assets/image/clock.png" alt="" className="img-fluid max-width" />
                            </div>
                            <div className="col-9 pl-3 pr-3">
                              <div className="box-title">
                                <h5>T-shirts with multiple colors, for men and lady</h5>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">Size: medium, Color: blue, Material: Plastic</span>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">x2</span>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="d-flex flex-column align-items-end">
                                <span>$98.00</span>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="/" className="product-item mb-2">
                          <div className="row">
                            <div className="col-1 border rounded p-2 d-flex align-items-center  justify-content-center">
                              <Image src="../../../../assets/image/clock.png" alt="" className="img-fluid max-width" />
                            </div>
                            <div className="col-9 pl-3 pr-3">
                              <div className="box-title">
                                <h5>T-shirts with multiple colors, for men and lady</h5>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">Size: medium, Color: blue, Material: Plastic</span>
                              </div>
                              <div className="box-description">
                                <span className="text-gray">x2</span>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="d-flex flex-column align-items-end">
                                <span>$98.00</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
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
