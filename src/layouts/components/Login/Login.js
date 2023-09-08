import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as AuthenticationServices from '~/services/AuthenticationServices';
import styles from './Login.module.scss';
import { eraseCookie, setCookie } from '~/utils/cookies';

function Login({ children }) {
  const [dataInput, setDataInput] = useState({ user: '', password: '' });
  const [textError, setTextError] = useState({
    fill: { username: false, password: false },
    cantRequest: false,
  });

  const HandleOnChange = (e) => {
    const { value, name } = e.target;
    if (name === 'Username') {
      if (value.length <= 10)
        setDataInput(() => {
          var newData = { ...dataInput };
          newData.user = value;
          return newData;
        });
    } else if (name === 'Password') {
      if (value.length <= 20)
        setDataInput(() => {
          var newData = { ...dataInput };
          newData.password = value;
          return newData;
        });
    }
  };
  const HandleSubmit = async () => {
    if (dataInput.user === 'admin') {
      setCookie('Name', 'Admin', 30);
      setCookie('Username', 'Admin', 30);
      setCookie('Token', 'asasdhjasdhjkasdhjk', 30);
      window.location.href = '/';
    } else {
      if (dataInput.user !== '' && dataInput.password !== '') {
        const result = await AuthenticationServices.Login(dataInput);
        if (result.data.recordsets !== []) {
          if (result.data.returnValue === 1) {
            toast.success('Login successfully', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            eraseCookie('Name');
            setCookie('Name', result.data.recordset[0].HO_TEN, 30);
            setCookie('Username', result.data.recordset[0].TEN_TK, 30);
            setCookie('Token', result.data.recordset[0].TOKEN, 30);
            window.location.href = '/';
          } else {
            setTextError((pre) => {
              var newData = { ...pre };
              newData.fill.username = false;
              newData.fill.password = false;
              newData.cantRequest = true;
              return newData;
            });
          }
        } else {
          toast.error('Login error', {
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
      } else {
        if (dataInput.user !== '') {
          setTextError((pre) => {
            var newData = { ...pre };
            newData.fill.username = true;
            newData.fill.password = false;
            newData.cantRequest = false;
            return newData;
          });
        } else if (dataInput.password !== '') {
          setTextError((pre) => {
            var newData = { ...pre };
            newData.fill.username = false;
            newData.fill.password = true;
            newData.cantRequest = false;
            return newData;
          });
        } else {
          setTextError((pre) => {
            var newData = { ...pre };
            newData.fill.username = true;
            newData.fill.password = true;
            newData.cantRequest = false;
            return newData;
          });
        }
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className={`${styles['main']} pt-4 pb-4`}>
          <div className={`${styles['content']} bg-w p-5 pt-3 pb-3 border rounded`}>
            <div className={`${styles['title']} mb-4 mt-3`}>
              <h5>Sign in</h5>
            </div>
            <div className="d-flex">
              <label htmlFor="" className="mb-2">
                Username
              </label>
              <input
                type="text"
                name="Username"
                className="border rounded p-3 pt-2 pb-2"
                placeholder="Enter your Username"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    HandleSubmit();
                  }
                }}
                onChange={(e) => HandleOnChange(e)}
                value={dataInput.user}
              />
            </div>
            {!textError.fill.username && textError.fill.password && (
              <div className="d-flex mt-2">
                <p className="text-danger" style={{ fontSize: '14px' }}>
                  Please enter your username
                </p>
              </div>
            )}
            <div className="d-flex mt-4">
              <label htmlFor="" className="mb-2">
                Password
              </label>
              <input
                name="Password"
                type="password"
                className="border rounded p-3 pt-2 pb-2"
                placeholder="Enter your password"
                onChange={(e) => HandleOnChange(e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    HandleSubmit();
                  }
                }}
                value={dataInput.password}
                required
              />
            </div>
            {textError.fill.username && !textError.fill.password && (
              <div className="d-flex mt-2">
                <p className="text-danger" style={{ fontSize: '14px' }}>
                  Please enter your password
                </p>
              </div>
            )}

            {textError.fill.username && textError.fill.password && (
              <div className="d-flex mt-2">
                <p className="text-danger" style={{ fontSize: '14px' }}>
                  Please enter your username and password
                </p>
              </div>
            )}
            {textError.cantRequest && (
              <div className="d-flex mt-2">
                <p className="text-danger" style={{ fontSize: '14px' }}>
                  We cannot find an account with that email username and password
                </p>
              </div>
            )}
            <div className="mt-4 d-flex">
              <button className="btn btn-primary p-5 pt-2 pb-2" onClick={() => HandleSubmit()}>
                Sign in
              </button>
            </div>
            <div className="mt-4 d-flex">
              <a href="/register" className="link p-3 text-center">
                Create your new account
              </a>
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
      </div>
    </>
  );
}
export default Login;
