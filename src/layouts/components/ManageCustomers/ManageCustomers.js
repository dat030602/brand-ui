import React, { useEffect, useState } from 'react';

import styles from './ManageCustomers.module.scss';
import { Image } from '~/components/Image';
import * as ManageCustomersServices from '~/services/ManageCustomersServices';
import { FormatDate } from '~/utils/FormatDate';

function ManageCustomers({ children }) {
  const [data, setData] = useState();
  const [coin, setCoin] = useState();

  const [indexDetail, setIndexDetail] = useState(0);
  var indexDetail_clone = 0;
  const [elementModalEdit, setElementModalEdit] = useState();
  const [dataEditing, setDataEditing] = useState();
  const [dataedited, setDataEdited] = useState();
  const [coinIndex, setCoinIndex] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await ManageCustomersServices.GetAllCustomers();
      setData(result[0]);
      setCoin(result[1]);
      console.log(result[0])
    };
    fetchApi();
  }, []);

  const HandleOnChangeEditCustomer = (e) => {
    const { value, name } = e.target;
    console.log(value);
    if (name === 'Name') {
      setDataEdited((pre) => {
        var newData = { ...pre };
        newData.name = value;
        return newData;
      });
    } else if (name === 'Email') {
      setDataEdited((pre) => {
        var newData = { ...pre };
        newData.email = value;
        return newData;
      });
    } else if (name === 'Phone') {
      setDataEdited((pre) => {
        var newData = { ...pre };
        newData.sdt = value;
        return newData;
      });
    } else if (name === 'Date') {
      setDataEdited((pre) => {
        var newData = { ...pre };
        newData.date = value;
        return newData;
      });
    } else if (name === 'Status') {
      setDataEdited((pre) => {
        var newData = { ...pre };
        newData.status = value;
        return newData;
      });
    }
  };

  const HandleOnClickFinish = async () => {
    let result = await ManageCustomersServices.EditCustomer(
      dataedited.makh,
      dataedited.name,
      dataedited.email,
      dataedited.sdt,
      dataedited.date,
      dataedited.status,
    );
    window.location.href = '/manage-customers';
  };

  const ElementEditCustomer = (newData, indexDetail) => {
    return (
      <div className="modal-body">
        <div className="modal-text">
          <p className="text-bold-normal">Customer Name</p>
          <input
            name="Name"
            type="text"
            className="border p-1 pr-2 pl-2"
            defaultValue={newData.HO_TEN}
            onChange={(e) => HandleOnChangeEditCustomer(e)}
          />
        </div>
        <div className="modal-text">
          <p className="text-bold-normal">Email</p>
          <input
            name="Email"
            type="text"
            className="border p-1 pr-2 pl-2"
            defaultValue={newData.EMAIL}
            onChange={(e) => HandleOnChangeEditCustomer(e)}
          />
        </div>
        <div className="modal-text">
          <p className="text-bold-normal">Phone number</p>
          <input
            name="Phone"
            type="text"
            className="border p-1 pr-2 pl-2"
            defaultValue={newData.SDT}
            onChange={(e) => HandleOnChangeEditCustomer(e)}
          />
        </div>
        <div className="modal-text">
          <p className="text-bold-normal">Date of birth</p>
          <input
            name="Date"
            type="date"
            className="border p-1 pr-2 pl-2"
            defaultValue={newData.NGAY_SINH}
            onChange={(e) => HandleOnChangeEditCustomer(e)}
          />
        </div>
        <div className="modal-text">
          <p className="text-bold-normal">Status</p>
          <select name="Status" className="border text-primary p-1" onChange={(e) => HandleOnChangeEditCustomer(e)}>
            <option value="1">Active</option>
            <option value="2">Disable</option>
          </select>
        </div>
      </div>
    );
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
          <a href="/" className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center`}>
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
            href="#"
            className={`${styles['box-item']} position-relative p-2 pl-4 d-flex align-items-center ${styles['active']}`}
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
      <div className="container">
        <div className="main pt-4 pb-4">
          <div className="pl-3 pr-3">
            <div className="bg-w border rounded">
              <div className="p-3">
                <div className="header d-flex align-items-center justify-content-between">
                  <div className={`${styles['title']}`}>
                    <h5>Customers ({data && data.length})</h5>
                  </div>
                </div>
                <section className="ftco-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-wrap">
                          <table className="table">
                            <thead className="thead-primary">
                              <tr>
                                <th className="text-center">Customer Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Phone number</th>
                                <th className="text-center">Date of birth</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Membership tiers</th>
                                <th className="text-center">Coin</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            {data !== undefined &&
                              Object.keys(data).map((index) => (
                                <tbody key={index}>
                                  <tr>
                                    <td className="">{data && data[index].HO_TEN}</td>
                                    <td className="">
                                      <p className="par-line-1 text-center">{data && data[index].EMAIL}</p>
                                    </td>
                                    <td className="">
                                      <p className="par-line-1 text-center">{data && data[index].SDT}</p>
                                    </td>
                                    <td className="">
                                      <p className="par-line-1 text-center">{data && data[index].NGAY_SINH}</p>
                                    </td>
                                    <td className="">
                                      <p className="par-line-1 text-center">
                                        {data && data[index].STATUS_ACCOUNT !== 2 ? 'Active' : 'Disable'}
                                      </p>
                                    </td>
                                    <td className={`${styles['tier']}`}>
                                      <div className="d-flex justify-content-center">
                                        {data && data[index].DIEM_THUONG  <= 200 ? ( 
                                          <>                                       
                                        <div className={`${styles['bronze-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                          Bronze
                                        </div>
                                        <div
                                          className={`${styles['bronze-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                         {data && data[index].DIEM_THUONG}
                                        </div>
                                        </>) : (data[index].DIEM_THUONG <=  400 && data[index].DIEM_THUONG >200 ) ? (<><div className={`${styles['silver-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                          Silver
                                        </div>
                                        <div
                                          className={`${styles['silver-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                         {data && data[index].DIEM_THUONG}
                                        </div></>):(<><div className={`${styles['gold-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                          Gold
                                        </div>
                                        <div
                                          className={`${styles['gold-tier']} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
                                        >
                                         {data && data[index].DIEM_THUONG}
                                        </div></>)}

                                      </div>
                                    </td>
                                    <td className="">
                                      <button
                                        className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                        data-toggle="modal"
                                        data-target="#showCoin"
                                        onClick={() => {
                                          setIndexDetail(index);
                                          setCoinIndex(data[index].TEN_TK);
                                          indexDetail_clone = index;
                                          const newData = data[index];
                                        }}
                                        style={{ width: '100%' }}
                                      >
                                        {data && Number(data[index].COIN.toFixed(2))}
                                      </button>
                                    </td>
                                    <td className="">
                                      <div className={`${styles['tier']} d-flex justify-content-center`}>
                                        <button
                                          className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
                                          data-toggle="modal"
                                          data-target="#editCustomerModal"
                                          onClick={() => {
                                            setIndexDetail(index);
                                            indexDetail_clone = index;
                                            const newData = data[index];
                                            setElementModalEdit(ElementEditCustomer(newData, indexDetail_clone));
                                            setDataEditing(newData);
                                            setDataEdited({
                                              makh: data[index].TEN_TK,
                                              name: '',
                                              email: '',
                                              sdt: '',
                                              date: '',
                                              status: '',
                                            });
                                          }}
                                        >
                                          Edit
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
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
        id="addCustomerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addCustomerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addCustomerModalLabel">
                Edit: Justin Lipshutz
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-text">
                <p className="text-bold-normal">Customer Name</p>
                <input type="text" className="border p-1 pr-2 pl-2" />
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Email</p>
                <input type="text" className="border p-1 pr-2 pl-2" />
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Phone number</p>
                <input type="text" className="border p-1 pr-2 pl-2" />
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Date of birth</p>
                <input type="date" className="border p-1 pr-2 pl-2" />
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Sex</p>
                <select className="border text-primary p-1">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Membership tiers</p>
                <input type="text" className="border p-1 pr-2 pl-2" />
              </div>
              <div className="modal-text">
                <p className="text-bold-normal">Image</p>
                <input type="file" className="border p-1 pr-2 pl-2" />
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
        id="editCustomerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editCustomerModalLabel"
        aria-hidden="true"
        onClick={(e) => {
          if (e.target.className === 'modal fade')
            setTimeout(() => {
              setElementModalEdit(undefined);
            }, 100);
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editCustomerModalLabel">
                Edit: {dataEditing && dataEditing.HO_TEN}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={(e) => {
                  setTimeout(() => {
                    setElementModalEdit(undefined);
                  }, 100);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{elementModalEdit !== undefined && elementModalEdit}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={(e) => {
                  setTimeout(() => {
                    setElementModalEdit(undefined);
                  }, 100);
                }}
              >
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={HandleOnClickFinish}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteCustomerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="deleteCustomerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteCustomerModalLabel">
                Delete: Justin Lipshutz
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
      <div
        className="modal fade"
        id="showCoin"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="showCoinLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="showCoinLabel">
                Status
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {coin !== undefined &&
                Object.keys(coin).map((index) => {
                  if (coin[index].MA_KHACH === coinIndex) {
                    let use = 0;
                    let total = Number(
                      (
                        coin[index].TONGTIEN +
                        coin[index].PHI_GIAO_HANG -
                        coin[index].GIAM_GIA -
                        coin[index].GIAM_GIA_GIAO_HANG
                      ).toFixed(2),
                    );
                    if (coin[index].GIAM_GIA > 0) use = coin[index].GIAM_GIA;
                    total = Number((total / 100).toFixed(2));
                    return (
                      <p>
                        {FormatDate(coin[index].NGAYTAO)}: RECEIVE: {total}, USE: {use}
                      </p>
                    );
                  }
                })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManageCustomers;
