import React, { useEffect, useState } from 'react';
import { eraseCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './PersonalEdit.module.scss';
import * as AuthenticationServices from '~/services/AuthenticationServices';
import { getCookie } from '~/utils/cookies';
import { FormatDate } from '~/utils/FormatDate';
import LoadingPage from '../LoadingPage/LoadingPage';

function PersonalEdit({ children }) {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [dataInput, setDataInput] = useState({ username: '', name: '', date: '', email: '', phone: '' });

  useEffect(() => {
    const fetchApi = async () => {
      let result = await AuthenticationServices.Profile(getCookie('Username'));
      setData(result);
      if (result !== undefined)
        setDataInput((pre) => {
          var newData = { ...pre };
          pre.username = result[0].TEN_TK;
          pre.name = result[0].HO_TEN;
          pre.date = result[0].NGAY_SINH;
          pre.email = result[0].EMAIL;
          pre.phone = result[0].SDT;
          return newData;
        });
    };
    fetchApi();
  }, []);

  const HandleOnChange = (e) => {
    const { value, name } = e.target;
    if (name === 'Name')
      setDataInput((pre) => {
        var newData = { ...pre };
        pre.name = value;
        return newData;
      });
    else if (name === 'Email')
      setDataInput((pre) => {
        var newData = { ...pre };
        pre.email = value;
        return newData;
      });
    else if (name === 'Phone number')
      setDataInput((pre) => {
        var newData = { ...pre };
        pre.phone = value;
        return newData;
      });
    else if (name === 'Date of Birth')
      setDataInput((pre) => {
        var newData = { ...pre };
        pre.date = value;
        return newData;
      });
  };

  const HandleOnClick = async () => {
    if (
      dataInput.name !== data[0].HO_TEN ||
      dataInput.date !== data[0].NGAY_SINH ||
      dataInput.email !== data[0].EMAIL ||
      dataInput.phone !== data[0].SDT
    ) {
      var newData = { ...dataInput };
      newData.date = FormatDate(newData.date);
      var result = await AuthenticationServices.EditProfile(newData);
      if (result !== undefined) {
        if (result.data.returnValue == 1) {
          let result = await AuthenticationServices.Profile(getCookie('Username'));
          setData(result);
          if (result !== undefined)
            setDataInput((pre) => {
              var newData = { ...pre };
              pre.username = result[0].TEN_TK;
              pre.name = result[0].HO_TEN;
              pre.date = result[0].NGAY_SINH;
              pre.email = result[0].EMAIL;
              pre.phone = result[0].SDT;
              return newData;
            });
          toast.success('Editing is successful', {
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
          toast.error("You can't edit", {
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
    } else
      toast.warn("You haven't edited yet", {
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
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/info">Personal info</a>
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
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 ${styles['active']}`}>
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
                    <h3>Profile setting</h3>
                  </div>
                  <div className="line"></div>
                  <div className="mt-4">
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Username
                      </label>

                      <div className="d-flex align-items-center">
                        <input
                          name="Username"
                          type="text"
                          className="border rounded pr-1 pt-1 pb-1 pl-2"
                          disabled
                          value={dataInput.username}
                          onChange={(e) => HandleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Name
                      </label>

                      <div className="d-flex align-items-center">
                        <input
                          name="Name"
                          type="text"
                          className="border rounded pr-1 pt-1 pb-1 pl-2"
                          value={dataInput.name}
                          onChange={(e) => HandleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Email
                      </label>

                      <div className="d-flex align-items-center">
                        <input
                          name="Email"
                          type="text"
                          className="border rounded pr-1 pt-1 pb-1 pl-2"
                          value={dataInput.email}
                          onChange={(e) => HandleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Phone number
                      </label>

                      <div className="d-flex align-items-center">
                        <input
                          name="Phone number"
                          type="text"
                          className="border rounded pr-1 pt-1 pb-1 pl-2"
                          value={dataInput.phone}
                          onChange={(e) => HandleOnChange(e)}
                        />
                      </div>
                    </div>
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Date of Birth
                      </label>

                      <div className="d-flex align-items-center">
                        <input
                          name="Date of Birth"
                          type="date"
                          className="border rounded pr-1 pt-1 pb-1 pl-2"
                          value={FormatDate(dataInput.date)}
                          onChange={(e) => HandleOnChange(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <button className="btn btn-success p-5 pt-2 pb-2" onClick={() => HandleOnClick()}>
                      Save
                    </button>
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
export default PersonalEdit;
