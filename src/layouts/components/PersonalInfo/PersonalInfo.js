import React, { Fragment, useEffect, useState } from 'react';
import { eraseCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './PersonalInfo.module.scss';
import * as PersonalInfoServices from '~/services/PersonalInfoServices';
import { getCookie } from '~/utils/cookies';
import { FormatDate } from '~/utils/FormatDate';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Image } from '~/components/Image';

function PersonalInfo({ children }) {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [dataAddress, setDataAddress] = useState();
  const [dataLocation, setDataLocation] = useState();
  const [indexEdit, setIndexEdit] = useState(0);
  const [dataAdd, setdataAdd] = useState({ TINH: '', THANHPHO: '', PHUONG: '', SONHA_DUONG: '' });
  const [dataAddFilter_TINH, setdataAddFilter_TINH] = useState([]);
  const [dataAddFilter_THANHPHO, setdataAddFilter_THANHPHO] = useState([]);
  const [dataEditFilter_TINH, setdataEditFilter_TINH] = useState([]);
  const [dataEditFilter_THANHPHO, setdataEditFilter_THANHPHO] = useState([]);
  const [dataEdit, setDataEdit] = useState({ STT: -1, TINH: '', THANHPHO: '', PHUONG: '', SONHA_DUONG: '' });
  const [isEditing, setIsEditing] = useState(false);
  // const [dataInput, setDataInput] = useState({ username: '', name: '', date: '', email: '', phone: '' });
  const fetchApi = async () => {
    let result = await PersonalInfoServices.GetData(getCookie('Username'));
    setData(result[0]);
    setDataAddress(result[1]);
    setDataLocation([result[2], result[3], result[4]]);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  const HandleOnClickAdd = async () => {
    const result = await PersonalInfoServices.AddAddress(getCookie('Username'), dataAdd);
    if (result.returnValue === 0)
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
    else {
      let result = await PersonalInfoServices.GetAddress(getCookie('Username'));
      setDataAddress(result);
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
    }
  };
  const HandleOnClickEdit = async () => {
    const result = await PersonalInfoServices.EditAddress(getCookie('Username'), dataEdit);
    if (result.returnValue === 0)
      toast.error("We can't edit", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    else {
      let result = await PersonalInfoServices.GetAddress(getCookie('Username'));
      setDataAddress(result);
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
    }
  };
  const HandleOnClickDelete = async (STT = -1) => {
    const result = await PersonalInfoServices.DeleteAddress(getCookie('Username'), STT);
    if (result.returnValue === 0)
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
    else {
      let result = await PersonalInfoServices.GetAddress(getCookie('Username'));
      setDataAddress(result);
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
    }
  };
  return (
    <>
      {data !== undefined && (
        <div className="container">
          <div className="main pt-4 pb-4">
            <div className="row align-items-start">
              <div className="col-2">
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  {/* <a href="https://m.me/lethungan.190702">Chatbox</a> */}
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 ${styles['active']}`}>
                  <a href="#">Personal info</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/my-cart">My cart</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/favorite">Favorite</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/orders-history">Orders history</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/loyalty">Loyalty Program</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/personal/edit">Profile setting</a>
                </div>
                <div
                  className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}
                  onClick={() => {
                    eraseCookie('Name');
                    eraseCookie('Username');
                    eraseCookie('Token');
                    navigate('/');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <button>Log out</button>
                </div>
              </div>
              <div className="col-10 pl-3">
                <div className="bg-w rounded border p-4">
                  <div className={`${styles['title']} pb-3`}>
                    <h3>Personal info</h3>
                  </div>
                  <div className="line"></div>
                  <div className="mt-4">
                    <div className={`${styles['title']} pb-3`}>
                      <p className="text-lg-left" style={{ fontSize: '1.3rem' }}>
                        {data[0].HO_TEN}
                      </p>
                      <p className="text-lg-left" style={{ fontSize: '1.1rem' }}>
                        Email: {data[0].EMAIL}, Phone: {data[0].SDT}
                      </p>
                    </div>
                    <div className={`pb-3 w-100`}>
                      <div className={`pb-3`}>
                        {Object.keys(dataAddress).map((index) => (
                          <div className={`d-inline-block w-50 mb-3 ${index % 2 === 0 ? 'pr-2' : 'pl-2'}`} key={index}>
                            <div className={`border border-secondary rounded p-2 pl-3 pr-3`}>
                              <div className={`${styles['box-icon']} mr-3`}>
                                <svg className="mr-2" data-src="./assets/svg/location.svg"></svg>
                                {`${dataAddress[index].SONHA_DUONG},
                                  ${dataAddress[index].PHUONG},
                                  ${dataAddress[index].THANHPHO},
                                  ${dataAddress[index].TINH}`}
                              </div>
                              <button
                                className="text-primary text-underline"
                                onClick={() => {
                                  setIndexEdit(index);
                                  setDataEdit((pre) => {
                                    var newData = { ...pre };
                                    newData.STT = dataAddress[index].STT;
                                    return newData;
                                  });
                                  setIsEditing(true);
                                }}
                              >
                                Edit
                              </button>
                              <svg className="ml-2 mr-2" data-src="./assets/svg/dot.svg"></svg>
                              <button
                                className="text-primary"
                                onClick={() => HandleOnClickDelete(dataAddress[index].STT)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      {isEditing && (
                        <div className={``}>
                          <p className="text-lg-left mb-1" style={{ fontSize: '1.05rem' }}>
                            Edit{': '}
                            {`${dataAddress[indexEdit].SONHA_DUONG},
                                  ${dataAddress[indexEdit].PHUONG},
                                  ${dataAddress[indexEdit].THANHPHO},
                                  ${dataAddress[indexEdit].TINH}`}
                          </p>
                          <div className={`d-flex`}>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setdataEditFilter_TINH((pre) => {
                                  var newData = [...pre];
                                  newData.splice(0, newData.length);
                                  newData = dataLocation[1].filter((TINH) => TINH.MA_TINH == e.target.value);
                                  return newData;
                                });
                                setDataEdit((pre) => {
                                  var newData = { ...pre };
                                  newData.TINH = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select Province</option>
                              {Object.keys(dataLocation[0]).map((index) => (
                                <option key={index} value={dataLocation[0][index].MA_TINH}>
                                  {dataLocation[0][index].TEN_TINH}
                                </option>
                              ))}
                            </select>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setdataEditFilter_THANHPHO((pre) => {
                                  var newData = [...pre];
                                  newData.splice(0, newData.length);
                                  newData = dataLocation[2].filter(
                                    (THANHPHO) => THANHPHO.MA_THANHPHO == e.target.value,
                                  );
                                  return newData;
                                });
                                setDataEdit((pre) => {
                                  var newData = { ...pre };
                                  newData.THANHPHO = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select District</option>
                              {dataEditFilter_TINH !== undefined &&
                                Object.keys(dataEditFilter_TINH).map((index) => (
                                  <option key={index} value={dataEditFilter_TINH[index].MA_THANHPHO}>
                                    {dataEditFilter_TINH[index].TEN_THANHPHO}
                                  </option>
                                ))}
                            </select>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setDataEdit((pre) => {
                                  var newData = { ...pre };
                                  newData.PHUONG = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select Ward</option>
                              {dataEditFilter_THANHPHO !== undefined &&
                                Object.keys(dataEditFilter_THANHPHO).map((index) => (
                                  <option key={index} value={dataEditFilter_THANHPHO[index].MA_PHUONG}>
                                    {dataEditFilter_THANHPHO[index].TEN_PHUONG}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="input-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="House number and street"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e) => {
                                setDataEdit((pre) => {
                                  var newData = { ...pre };
                                  newData.SONHA_DUONG = e.target.value;
                                  return newData;
                                });
                              }}
                            />
                          </div>
                          <p className="text-lg-left mb-1" style={{ fontSize: '1.05rem' }}>
                            New Address{': '}
                            {`${dataEdit.SONHA_DUONG},${
                              dataEdit.PHUONG !== ''
                                ? `${
                                    dataLocation[2].filter((add) => {
                                      return add.MA_PHUONG == dataEdit.PHUONG && add.MA_THANHPHO == dataEdit.THANHPHO;
                                    })[0].TEN_PHUONG
                                  }, `
                                : ''
                            } ${
                              dataEdit.THANHPHO !== ''
                                ? `${
                                    dataLocation[1].filter(
                                      (add) => add.MA_THANHPHO == dataEdit.THANHPHO && add.MA_TINH == dataEdit.TINH,
                                    )[0].TEN_THANHPHO
                                  }, `
                                : ''
                            }${
                              dataEdit.TINH !== ''
                                ? `${
                                    dataLocation[0].filter((add) => {
                                      return add.MA_TINH == dataEdit.TINH;
                                    })[0].TEN_TINH
                                  }`
                                : ''
                            }`}
                          </p>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-center">
                              <button
                                type="button"
                                className="btn btn-success pl-4 pr-4"
                                onClick={() => HandleOnClickEdit()}
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className={`pb-3`}>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={(e) => {
                            var parent = e.target.parentElement;
                            var child = parent.childNodes[1];
                            child.style.display = 'block';
                          }}
                        >
                          + Add new address
                        </button>
                        <div className={`mt-3`} style={{ display: 'none' }}>
                          <p className="text-lg-left mb-1" style={{ fontSize: '1.05rem' }}>
                            Address
                          </p>
                          <div className={`d-flex`}>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setdataAddFilter_TINH((pre) => {
                                  var newData = [...pre];
                                  newData.splice(0, newData.length);
                                  newData = dataLocation[1].filter((TINH) => TINH.MA_TINH == e.target.value);
                                  return newData;
                                });
                                setdataAdd((pre) => {
                                  var newData = { ...pre };
                                  newData.TINH = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select Province</option>
                              {Object.keys(dataLocation[0]).map((index) => (
                                <option key={index} value={dataLocation[0][index].MA_TINH}>
                                  {dataLocation[0][index].TEN_TINH}
                                </option>
                              ))}
                            </select>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setdataAddFilter_THANHPHO((pre) => {
                                  var newData = [...pre];
                                  newData.splice(0, newData.length);
                                  newData = dataLocation[2].filter(
                                    (THANHPHO) => THANHPHO.MA_THANHPHO == e.target.value,
                                  );
                                  return newData;
                                });
                                setdataAdd((pre) => {
                                  var newData = { ...pre };
                                  newData.THANHPHO = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select District</option>
                              {dataAddFilter_TINH !== undefined &&
                                Object.keys(dataAddFilter_TINH).map((index) => (
                                  <option key={index} value={dataAddFilter_TINH[index].MA_THANHPHO}>
                                    {dataAddFilter_TINH[index].TEN_THANHPHO}
                                  </option>
                                ))}
                            </select>
                            <select
                              className="form-control mr-3 flex-fill"
                              onChange={(e) => {
                                setdataAdd((pre) => {
                                  var newData = { ...pre };
                                  newData.PHUONG = e.target.value;
                                  return newData;
                                });
                              }}
                            >
                              <option value="">Select Ward</option>
                              {dataAddFilter_THANHPHO !== undefined &&
                                Object.keys(dataAddFilter_THANHPHO).map((index) => (
                                  <option key={index} value={dataAddFilter_THANHPHO[index].MA_PHUONG}>
                                    {dataAddFilter_THANHPHO[index].TEN_PHUONG}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="input-group mt-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="House number and street"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e) => {
                                setdataAdd((pre) => {
                                  var newData = { ...pre };
                                  newData.SONHA_DUONG = e.target.value;
                                  return newData;
                                });
                              }}
                            />
                          </div>
                          <div className="w-100 mt-3">
                            <div className="d-flex justify-content-center">
                              <button
                                type="button"
                                className="btn btn-success pl-4 pr-4"
                                onClick={() => HandleOnClickAdd()}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      {data === undefined && <LoadingPage />}
    </>
  );
}
export default PersonalInfo;
