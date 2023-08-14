import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './HotOffers.module.scss';
import * as voucherServices from '~/services/VoucherServices';
import LoadingPage from '../LoadingPage/LoadingPage';
import { FormatDate } from '~/utils/FormatDate';
import { useParams } from 'react-router-dom';

function HotOffers({ children }) {
  const [data, setData] = useState();
  const [pagination, setPagination] = useState();
  const [countItem, setCountItem] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await voucherServices.GetAllVouchers(parseInt(id));
      setData(result.data);
      setCountItem(result.lengthData[1]);
      var newArray = [];
      for (let index = 0; index < result.lengthData[0]; index++) newArray.push(index + 1);
      setPagination(newArray);
    };
    fetchApi();
  }, []);

  const handleOnClickSave = (index) => {
    navigator.clipboard.writeText(data[index].voucher_id);

    toast.success(`Copied ${data[index].voucher_id} to clipboard`, {
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
            <div className="row pb-4">
              <div className={`${styles['header-products']} bg-w d-flex pt-2 pb-2 pl-3 pr-3 mb-3 rounded border`}>
                <div className={`${styles['about']}`}>
                  {countItem} items in <strong>Offers</strong>
                </div>
                <div className={`${styles['grid-products']} d-flex border rounded`}></div>
              </div>
              <div className={styles['products']}>
                {Object.entries(data).map((el, index) => {
                  return (
                    <div className={styles['products-item']} key={el[0]}>
                      <div className={`${styles['product']} row rounded overflow-hidden bg-w pr-3 pl-3 border mb-3`}>
                        <div className={`${styles['product-content']} p-3 d-flex justify-content-between`}>
                          <div className={`${styles['product-content']}-cover mb-2`}>
                            <div className={`${styles['product-name']} par-line-2`}>{el[1].name_voucher}</div>
                            <div className={`${styles['product-name']} par-line-2`}>
                              Expiration date: {FormatDate(el[1].end_date)}
                            </div>
                            <div className={`${styles['product-description']} mt-2 mb-2 overflow-hidden`}>
                              <span className="par-line-2">Code : {el[1].voucher_id} </span>
                            </div>
                            <div className={`${styles['product-description']} mt-2 mb-2 overflow-hidden`}>
                              <span className="par-line-2">
                                Voucher starts from {FormatDate(el[1].start_date, true)} to {''}
                                {FormatDate(el[1].end_date, true)}, {el[1].discount}% off order value over{' '}
                                {el[1].min_price}$, up to {el[1].max_price}$
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <button
                              className="btn btn-outline-warning p-4 pt-2 pb-2 ml-2"
                              onClick={() => handleOnClickSave(index)}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {pagination.lengthData === 1 && (
                <>
                  <div className="d-flex justify-content-end">
                    <nav>
                      <ul className="pagination">
                        {id - 1 > 0 && (
                          <li className="page-item mr-1">
                            <a className="page-link" href={`/hot-offers/${id - 1}`} aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                        )}

                        {Object.keys(pagination).map((index) => {
                          return parseInt(index) + 1 == id ? (
                            <li className="page-item mr-1 active" key={index}>
                              <a className="page-link" href={`#`}>
                                {pagination[index]}
                              </a>
                            </li>
                          ) : (
                            <li className="page-item mr-1" key={index}>
                              <a className="page-link" href={`/hot-offers/${pagination[index]}`}>
                                {pagination[index]}
                              </a>
                            </li>
                          );
                        })}

                        {id - 1 < Math.max(...pagination) && (
                          <li className="page-item mr-1">
                            <a className="page-link" href={`/hot-offers/${parseInt(id) + 1}`} aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
                </>
              )}
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
export default HotOffers;
