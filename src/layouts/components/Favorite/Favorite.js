import React, { useEffect, useState } from 'react';
import { eraseCookie, getCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Favorite.module.scss';
import * as FavoriteServices from '~/services/FavoriteServices';
import LoadingPage from '../LoadingPage/LoadingPage';
import { Image } from '~/components/Image';

function Favorite({ children }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const fetchApi = async () => {
    let result = await FavoriteServices.GetProducts(getCookie('Username'));
    setData(result[0]);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      {data !== undefined && (
        <div className="container">
          <div className="main pt-4 pb-4">
            <div className="row">
              <div className="col-2">
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/">Personal info</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/my-cart">My cart</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 ${styles['active']}`}>
                  <a href="/favorite">Favorite</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/orders-history">Orders history</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/loyalty">Loyalty Program</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 active`}>
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
                  <div className="title pb-3">
                    <h3>Favorite</h3>
                  </div>
                  <div className="line"></div>
                  <div className="list-box mt-4">
                    {Object.keys(data).map((index) => (
                      <div className="box-item mb-4" key={index}>
                        <div className="border rounded p-3 pt-3">
                          <div className="list-products d-flex justify-content-between align-items-center">
                            <a href={`/product/${data[index].ma_sp}`} className="product-item mb-2">
                              <div className="row">
                                <div className="col-1 border rounded p-2 d-flex align-items-center justify-content-center">
                                  <Image src={data[index].hinhanh} alt="" className="img-fluid max-width" />
                                </div>
                                <div className="col-8 pl-3 pr-3">
                                  <div className="box-title">
                                    <h5>{data[index].ten_sp}</h5>
                                  </div>
                                  <div className="box-description">
                                    <span className="text-gray">{data[index].mo_ta}</span>
                                  </div>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-end">
                                  <div className="d-flex align-items-center">
                                    <span>${data[index].gia_ban}</span>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="d-flex align-items-center">
                                <div className="">
                                  <button
                                    className="btn btn-outline-danger p-4 pt-2 pb-2 ml-3"
                                    onClick={async () => {
                                      var result = await FavoriteServices.DeleteFavorite(
                                        data[index].ma_sp,
                                        getCookie('Username'),
                                      );
                                      if (result !== undefined) {
                                        if (result.returnValue === 1) {
                                          fetchApi();
                                          toast.success('Remove successfully', {
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
                                          toast.error("They can't remove", {
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
                                        toast.error("They can't remove", {
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
                                    }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
        </div>
      )}
      {data === undefined && <LoadingPage />}
    </>
  );
}
export default Favorite;
