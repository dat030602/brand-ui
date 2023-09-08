import React, { useEffect } from 'react';

import styles from './ConfirmPaypal.module.scss';
import LoadingPage from '../LoadingPage';
// import className from "className/bind";
import { ConfirmPayPalApi } from '~/services/CheckoutServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// const cx = className.bind(styles);
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCookie } from '~/utils/cookies';
function ConfirmPayPal({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = getCookie('Username');
  const linkTo = useNavigate();
  const funcConfirm = async (id_Paypal) => {
    const data = {
      id_Paypal: id_Paypal,
      id_user: username,
    };
    await ConfirmPayPalApi(data).then((res) => {
      if (res.data.status === 'success') {
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
      if (res.data.status === 'error') {
        linkTo('/orders-history');
        toast.error(`${res.data.message}`, {
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
      if (res.data.status === 'Not Found') {
        linkTo('/orders-history');
        toast.error(`${res.data.message}`, {
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
    const id_Paypal = searchParams.get('token');
    funcConfirm(id_Paypal);
  }, []);
  return (
    <>
      <LoadingPage></LoadingPage>
    </>
  );
}
export default ConfirmPayPal;
