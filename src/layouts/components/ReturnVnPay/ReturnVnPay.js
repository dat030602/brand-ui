import React, { useEffect } from 'react';

import styles from './ReturnVnPay.module.scss';
import LoadingPage from '../LoadingPage';
// import className from "className/bind";
import { ReturnVnPayApi } from '~/services/CheckoutServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const cx = className.bind(styles);
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCookie } from '~/utils/cookies';
function ReturnVnPay({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = getCookie('Username');
  const linkTo = useNavigate();
  const funcReturn = async (query) => {
    await ReturnVnPayApi(query).then((res) => {
      console.log(res);
      if (res.status === 'success') {
        linkTo('/orders-history');
        toast.success('Confirm success', {
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
      if (res.status === 'error') {
        linkTo('/orders-history');
        toast.error(`${res.message}`, {
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
      if (res.status === 'Cancel') {
        linkTo('/orders-history');
        toast.error(`${res.message}`, {
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
      if (res.status === 'Not Found') {
        linkTo('/orders-history');
        toast.error(`${res.message}`, {
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
    });
  };

  useEffect(() => {
    let query = '?';
    let index = 0;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      if (index === 0) {
        query = query + param + '=' + value;
      } else {
        query = query + '&' + param + '=' + value;
      }
      index = index + 1;
    }
    query = query + '&id_user=' + username;
    funcReturn(query);
  }, []);
  return (
    <>
      <LoadingPage></LoadingPage>
    </>
  );
}
export default ReturnVnPay;
