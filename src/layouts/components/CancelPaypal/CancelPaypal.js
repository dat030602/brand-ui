import React, { useEffect } from 'react';

import styles from './CancelPaypal.module.scss';
import LoadingPage from '../LoadingPage';
// import className from "className/bind";
import { CancelPayPalApi } from '~/services/CheckoutServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCookie } from '~/utils/cookies';
function CancelPayPal({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const username = getCookie('Username');
  const linkTo = useNavigate();
  const funcConfirm = async (id_Paypal) => {
    const data = {
      id_Paypal: id_Paypal,
      id_user: username,
    };
    await CancelPayPalApi(data).then((res) => {
      if (res.data.status === 'success') {
        let id = res.data.id.replace(/\D/g, '');
        linkTo(`/orders-history`);
      } else {
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
export default CancelPayPal;
