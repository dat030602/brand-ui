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
  const [dataInput, setDataInput] = useState({
    voucher_id: '',
    name_voucher: '',
    discount: '',
    min_price: '',
    max_price: '',
    start_date: '',
    end_date: '',
  });

  const [elementModalEdit, setElementModalEdit] = useState();
  const [elementModalAdd, setElementModalAdd] = useState();
  const [valueModalAdd, setValueModalAdd] = useState();
  const [valueModalAddDetail, setValueModalAddDetail] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      let result = await ManageVouchersServices.GetAllVouchers();
      setData(result);
    };
    fetchApi();
  }, []);

  const ElementModalEdit = ({ initData }) => (
    <Fragment>
      <div className="modal-text">
        <p className="text-bold-normal">Voucher Name</p>
        <input
          name="Voucher Name"
          type="text"
          className="border p-1 pr-2 pl-2"
          defaultValue={initData.name_voucher}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Discount</p>
        <input
          name="Discount"
          type="text"
          className="border p-1 pr-2 pl-2"
          defaultValue={initData.discount}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Min price cart</p>
        <input
          name="Min price cart"
          type="text"
          className="border p-1 pr-2 pl-2"
          defaultValue={initData.min_price}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Max discount</p>
        <input
          name="Max discount"
          type="text"
          className="border p-1 pr-2 pl-2"
          defaultValue={initData.max_price}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Start Date</p>
        <input
          name="Start Date"
          type="datetime-local"
          className="border p-1 pr-2 pl-2"
          defaultValue={FormatDate(initData.start_date, true, true)}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">End Date</p>
        <input
          name="End Date"
          type="datetime-local"
          className="border p-1 pr-2 pl-2"
          defaultValue={FormatDate(initData.end_date, true, true)}
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
    </Fragment>
  );

  const ElementModalAdd = () => (
    <Fragment>
      <div className="modal-text">
        <p className="text-bold-normal">Voucher Name</p>
        <input
          defaultValue=""
          name="Voucher Name"
          type="text"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Discount</p>
        <input
          defaultValue=""
          name="Discount"
          type="text"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Min price cart</p>
        <input
          defaultValue=""
          name="Min price cart"
          type="text"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Max discount</p>
        <input
          defaultValue=""
          name="Max discount"
          type="text"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">Start Date</p>
        <input
          defaultValue=""
          name="Start Date"
          type="datetime-local"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
      <div className="modal-text">
        <p className="text-bold-normal">End Date</p>
        <input
          defaultValue=""
          name="End Date"
          type="datetime-local"
          className="border p-1 pr-2 pl-2"
          onChange={(e) => handleOnChangeEdit(e)}
        />
      </div>
    </Fragment>
  );

  const handleOnClickChangeIndex = (index, edit = false) => {
    setIndexDetail(index);
    if (edit) {
      setElementModalEdit(<ElementModalEdit initData={data[index].voucher} />);
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.voucher_id = data[index].voucher.voucher_id;
        newData.name_voucher = data[index].voucher.name_voucher;
        newData.discount = data[index].voucher.discount;
        newData.min_price = data[index].voucher.min_price;
        newData.max_price = data[index].voucher.max_price;
        newData.start_date = data[index].voucher.start_date;
        newData.end_date = data[index].voucher.end_date;
        return newData;
      });
    }
    indexDetail_clone = index;
  };
  const handleOnClickDelete = async (index, submit) => {
    if (!submit) {
      setIndexDetail(index);
      indexDetail_clone = index;
    } else {
      var result = await ManageVouchersServices.DeleteVoucher(data[indexDetail_clone].voucher.voucher_id);
      if (result !== undefined) {
        if (result.returnValue === 1) {
          let result = await ManageVouchersServices.GetAllVouchers();
          setData(result);
          toast.success('Delete successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else
          toast.error("We can't delete", {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
      } else
        toast.error("We can't delete", {
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
  const handleOnClickEdit = async () => {
    var newData = { ...dataInput };
    newData.start_date = FormatDate(newData.start_date, true);
    newData.end_date = FormatDate(newData.end_date, true);

    var result = await ManageVouchersServices.EditVoucher(newData);
    if (result !== undefined) {
      if (result.returnValue === 1) {
        let result = await ManageVouchersServices.GetAllVouchers();
        setData(result);
        toast.success('Edit successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else
        toast.error("We can't delete", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
    } else
      toast.error("We can't delete", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
  };
  const handleOnClickAdd = async () => {
    var newData = { ...dataInput };
    newData.start_date = FormatDate(newData.start_date, true);
    newData.end_date = FormatDate(newData.end_date, true);

    var result = await ManageVouchersServices.AddVoucher(newData);
    if (result !== undefined) {
      if (result.returnValue === 1) {
        let result = await ManageVouchersServices.GetAllVouchers();
        setData(result);
        toast.success('Add successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else
        toast.error("We can't add", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
    } else
      toast.error("We can't add", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
  };

  const handleOnChangeEdit = (e) => {
    // setIndexDetail(index);
    // if (edit) setElementModalEdit(<ElementModalEdit initData={data[index].voucher} />);
    // indexDetail_clone = index;
    const { value, name } = e.target;
    if (name === 'Voucher Name') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.name_voucher = value;
        return newData;
      });
    } else if (name === 'Discount') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.discount = value;
        return newData;
      });
    } else if (name === 'Min price cart') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.min_price = value;
        return newData;
      });
    } else if (name === 'Max discount') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.max_price = value;
        return newData;
      });
    } else if (name === 'Start Date') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.start_date = value;
        return newData;
      });
    } else if (name === 'End Date') {
      setDataInput((pre) => {
        var newData = { ...pre };
        newData.end_date = value;
        return newData;
      });
    }
  };

  useEffect(() => {
    console.log(dataInput);
  }, [dataInput]);

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
                        onClick={() => {
                          setElementModalAdd(<ElementModalAdd />);
                          setDataInput((pre) => {
                            var newData = { ...pre };
                            newData.voucher_id = '';
                            newData.name_voucher = '';
                            newData.discount = '';
                            newData.min_price = '';
                            newData.max_price = '';
                            newData.start_date = '';
                            newData.end_date = '';
                            return newData;
                          });
                        }}
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
                                        <p className="par-line-1">{data[index].voucher.name_voucher}</p>
                                      </td>
                                      <td className="text-center">
                                        <div className="overflow-hidden">
                                          <p className="par-line-1 text-center">{data[index].voucher.discount}%</p>
                                        </div>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].voucher.min_price}đ</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].voucher.max_price}đ</p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">
                                          {FormatDate(data[index].voucher.start_date)}
                                        </p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">
                                          {FormatDate(data[index].voucher.end_date)}
                                        </p>
                                      </td>
                                      <td className="text-center">
                                        <p className="par-line-1 text-center">{data[index].voucher.used}</p>
                                      </td>
                                      <td className="tier d-flex justify-content-center">
                                        <button
                                          className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                          data-toggle="modal"
                                          data-target="#historyVoucherModal"
                                          onClick={() => handleOnClickChangeIndex(index)}
                                        >
                                          History
                                        </button>
                                        <button
                                          className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                          data-toggle="modal"
                                          data-target="#editVoucherModal"
                                          onClick={() => handleOnClickChangeIndex(index, true)}
                                        >
                                          Edit
                                        </button>
                                        <button
                                          className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
                                          data-toggle="modal"
                                          data-target="#deleteVoucherModal"
                                          onClick={() => handleOnClickDelete(index)}
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
          {/* Add */}
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
                <div className="modal-body">{elementModalAdd !== undefined && elementModalAdd}</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={() => handleOnClickAdd()}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* History */}
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
                    Voucher: {data[indexDetail].voucher.name_voucher}
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {Object.keys(data[indexDetail].history).map((index) => (
                    <div className="modal-text" key={index}>
                      <p className="">
                        {data[indexDetail].history[index].HO_TEN} used at{' '}
                        {FormatDate(data[indexDetail].history[index].timeUsed, true)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Edit */}
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
                    Edit voucher: {data[indexDetail].voucher.name_voucher}
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{elementModalEdit !== undefined && elementModalEdit}</div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={() => handleOnClickEdit()}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Delete */}
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
                    Delete voucher: {data[indexDetail].voucher.name_voucher}
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
                    onClick={() => handleOnClickDelete(indexDetail_clone, true)}
                  >
                    Delete
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
        </>
      )}
      {data === undefined && <LoadingPage />}
    </>
  );
}
export default ManageVouchers;
