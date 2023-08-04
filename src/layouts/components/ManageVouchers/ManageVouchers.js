import React, { Fragment, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ManageVouchers.module.scss';
import * as ManageVouchersServices from '~/services/ManageVouchersServices';
import LoadingPage from '../LoadingPage/LoadingPage';
import { FormatDate } from '~/utils/FormatDate';

function ManageVouchers({ children }) {
  const [data, setData] = useState();
  const [indexDetail, setIndexDetail] = useState(0);
  var indexDetail_clone = 0;
  const [deleteItem, setDeleteItem] = useState({ title: '', id: { masp: '', stt: 0 } });
  const [dataEditing, setDataEditing] = useState();

  const [elementModalEdit, setElementModalEdit] = useState();
  const [elementAddModalEdit, setElementAddModalEdit] = useState(false);
  const [valueModalAdd, setValueModalAdd] = useState();
  const [valueModalAddDetail, setValueModalAddDetail] = useState({
    masp: '',
    stt: 0,
    name: '',
    price: '',
    importPrice: '',
    stock: 0,
    image: undefined,
  });
  useEffect(() => {
    const fetchApi = async () => {
      let result = await ManageVouchersServices.GetAllVouchers();
      setData(result);
      console.log(result)
    };
    fetchApi();
  }, []);
  return (
    <>
      <nav className={`${styles['side-menu']} bg-w border`}>
        <div className={`${styles['box-user']} d-flex align-items-center pl-4 pt-4`}>
          <div className={`${styles['box-image']} pr-3`}>
            <img src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg" alt="" />
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
            href="/manage-orders"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}
          >
            <div className={`${styles['box-icon']} mr-3`}>
              <svg className="mr-2" data-src="./assets/svg/order.svg"></svg>
            </div>
            <div className={`${styles['box-content']} text-bold-normal`}>Orders</div>
            <div className="box-rectangle"></div>
          </a>
          <a
            href="#"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center ${styles['active']}`}
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
      {data !== undefined && (
        <>
          <div className="container">
            <div className="main pt-4 pb-4">
              <div className="pl-3 pr-3">
                <div className="bg-w border rounded">
                  <div className="p-3">
                    <div className="header d-flex align-items-center justify-content-between">
                      <div className="title">
                        <h5>Vouchers (3)</h5>
                      </div>
                      <button
                        className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal sliver-tier btn-add"
                        data-toggle="modal"
                        data-target="#addVoucherModal"
                      >
                        Add
                      </button>
                    </div>
                    <section className="ftco-section">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-wrap">
                              <table className="table">
                                <thead className="thead-primary">
                                  <tr>
                                    <th className="text-center">Voucher Name</th>
                                    <th className="text-center">Discount</th>
                                    <th className="text-center">Min price cart</th>
                                    <th className="text-center">Max discount</th>
                                    <th className="text-center">Start Date</th>
                                    <th className="text-center">End Date</th>
                                    <th className="text-center">Used</th>
                                    <th className="text-center">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Object.keys(data).map((index) => (
                                    <tr key={index}>
                                      <td className="">
                                        <p className="par-line-1">{data[index].name_voucher}</p>
                                      </td>
                                      <td className="text-center">
                                        <div className="overflow-hidden">
                                          <p className="par-line-1 text-center">{data[index].discount}%</p>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].min_price}đ</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].max_price}đ</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{FormatDate(data[index].start_date)}</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{FormatDate(data[index].end_date)}</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].used}</p>
                                      </td>
                                      <td className="tier d-flex justify-content-center">
                                        <button
                                          className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                          data-toggle="modal"
                                          data-target="#historyVoucherModal"
                                        >
                                          History
                                        </button>
                                        <button
                                          className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                          data-toggle="modal"
                                          data-target="#editVoucherModal"
                                        >
                                          Edit
                                        </button>
                                        <button
                                          className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
                                          data-toggle="modal"
                                          data-target="#deleteVoucherModal"
                                        >
                                          Delete
                                        </button>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="addVoucherModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addVoucherModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addVoucherModalLabel">
                    Add voucher
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-text">
                    <p className="text-bold-normal">Voucher Name</p>
                    <input type="text" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Discount</p>
                    <input type="text" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Min price cart</p>
                    <input type="text" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Max discount</p>
                    <input type="text" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Start Date</p>
                    <input type="date" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">End Date</p>
                    <input type="date" className="border p-1 pr-2 pl-2" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="historyVoucherModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="historyVoucherModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="historyVoucherModalLabel">
                    Voucher: Free ship
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-text">
                    <p className="text-bold-normal">Voucher Name</p>
                    <p className="">Nguyen Van A used at 20:00:00 April 30, 2023</p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="editVoucherModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="editVoucherModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editVoucherModalLabel">
                    Edit voucher: Free ship
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-text">
                    <p className="text-bold-normal">Voucher Name</p>
                    <input type="text" className="border p-1 pr-2 pl-2" value="iPhone 12" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Discount</p>
                    <input type="text" className="border p-1 pr-2 pl-2" value="iPhone 12" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Min price cart</p>
                    <input type="text" className="border p-1 pr-2 pl-2" value="iPhone 12" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Max discount</p>
                    <input type="text" className="border p-1 pr-2 pl-2" value="iPhone 12" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">Start Date</p>
                    <input type="date" className="border p-1 pr-2 pl-2" />
                  </div>
                  <div className="modal-text">
                    <p className="text-bold-normal">End Date</p>
                    <input type="date" className="border p-1 pr-2 pl-2" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="deleteVoucherModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteVoucherModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteVoucherModalLabel">
                    Delete voucher: Free ship
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">Are you sure about that?</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {data === undefined && <LoadingPage />}
    </>
  );
}
export default ManageVouchers;
