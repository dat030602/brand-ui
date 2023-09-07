import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Product.module.scss';
import * as ProductServices from '~/services/ProductServices';
import * as FavoriteServices from '~/services/FavoriteServices';
import LoadingPage from '../LoadingPage/LoadingPage';
import Star from '~/components/Star/Star';
import { getCookie } from '~/utils/cookies';
import Image from '~/components/Image/Image';

function Product({ children }) {
  const { id } = useParams();
  const [data, setData] = useState();
  const [dataFavorite, setDataFavorite] = useState();
  const [favorite, setFavorite] = useState(false);
  const [dataSelected, setDataSelected] = useState({ MA_SP: '', STT: -1, soluong: 1 });
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await ProductServices.GetProduct(id, getCookie('Username'));
      setData(result);
      setFavorite(result[0][0].favorite == 1);
      if (getCookie('Username') !== null) {
        result = await FavoriteServices.GetProducts(getCookie('Username'));
        setDataFavorite(result[0]);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {data !== undefined && (
        <div className="container">
          <div className="main pt-4 pb-4">
            <div className={`d-flex`}>
              <div className={`${styles['direction-item']} mr-2`}>
                <a href="/" className="">
                  Home
                </a>
              </div>
              <div className="arrow mr-2">
                <img src="../../../../assets/svg/arrow.svg" alt="" />
              </div>
              <div className={`${styles['direction-item']} mr-2`}>
                <a href="/" className="">
                  {data[0][0].TEN_LOAI_SP}
                </a>
              </div>
              <div className="arrow mr-2">
                <img src="../../../../assets/svg/arrow.svg" alt="" />
              </div>
              <div className={`${styles['direction-item']}`}>
                <a href="#" className="">
                  {data[0][0].TEN_SP}
                </a>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <div className="bg-w border rounded">
                <div className="row">
                  <div className="col-6 p-3 position-relative" style={{ height: '500px' }}>
                    {/* <!-- Carousel wrapper --> */}
                    <Carousel data-bs-theme="dark">
                      {Object.keys(data[2]).map((index) => (
                        <Carousel.Item key={index}>
                          <Image src={data[2][index].HINHANH} className={`d-block ${styles['img-slide']}`} alt="..." />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  <div className="col-6 p-3">
                    <div className={`${styles['about']}`}>
                      <div className={`${styles['product-name']}`}>{data[0][0].TEN_SP}</div>
                      <div className="product-about mt-3 mb-3">
                        <div className="product-about d-flex">
                          <div className="product-star d-flex">
                            <div className="svg-star d-flex align-items-center">
                              <Star amount={data[0][0].RATING} />
                            </div>
                            <div className={`${styles['product-point']}`}>{data[0][0].RATING}</div>
                          </div>
                          <div className={`${styles['product-sale']}`}>
                            <span>•</span>
                            <span>{data[0][0].SL_DA_BAN} orders</span>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles['product-list-box']}`}>
                        {Object.keys(data[1]).map((index) => (
                          <div
                            className={`${styles['link-box']} rounded border d-inline-block p-3 mr-3 mb-3 text-center`}
                            key={index}
                            style={{
                              userSelect: data[1][index].SL_KHO === 0 ? 'none' : 'auto',
                              cursor: data[1][index].SL_KHO === 0 ? 'default' : 'pointer',
                              backgroundColor: data[1][index].SL_KHO === 0 ? '#ccc' : 'transparent',
                            }}
                            onClick={(e) => {
                              const clearStyle = (node) => {
                                var parent = node.parentElement;
                                var child = parent.childNodes;
                                for (let index = 0; index < child.length; index++) {
                                  const element = child[index];
                                  element.style.boxShadow = 'none';
                                }
                              };
                              var node = e.target;
                              while (
                                node.className !==
                                `${styles['link-box']} rounded border d-inline-block p-3 mr-3 mb-3 text-center`
                              ) {
                                node = node.parentElement;
                              }
                              clearStyle(node);
                              node.style.boxShadow = 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
                              setDataSelected((pre) => {
                                var newData = { ...pre };
                                newData.MA_SP = data[1][index].MA_SP;
                                newData.STT = data[1][index].STT;
                                return newData;
                              });
                            }}
                          >
                            <span>{data[1][index].TEN_CTSP}</span>
                            <div className={`${styles['price']} text-center`}>
                              <span>${data[1][index].GIA_BAN}</span>
                              <span>${data[1][index].GIA_NHAP}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className={`${styles['product-qty']}`}>
                        <label htmlFor="" className="mr-3">
                          Qty:
                        </label>
                        <input
                          type="number"
                          className="rounded border pl-2 pr-2 pt-1 pb-1"
                          defaultValue="1"
                          onChange={(e) => {
                            setAmount(amount + parseInt(e.target.value));
                            setDataSelected((pre) => {
                              var newData = { ...pre };
                              newData.soluong = amount + parseInt(e.target.value);
                              return newData;
                            });
                          }}
                        />
                      </div>
                      <div
                        className={`${styles['product-action']} d-flex align-items-center mt-3 justify-content-between`}
                      >
                        <div
                          className={`${styles['product-favorite']} ${favorite === true ? styles['active'] : ''} mr-3`}
                        >
                          <button
                            onClick={async () => {
                              if (getCookie('Username') === null) navigate('/login');
                              else {
                                var result = await ProductServices.Favorite(data[0][0].MA_SP, getCookie('Username'));
                                if (result.data === 1) {
                                  setFavorite(!favorite);
                                  toast.success('Favorite successfully', {
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
                                  toast.error('Favorite error', {
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
                            }}
                          >
                            <svg className="star btn" data-src="../../../../assets/svg/heart.svg"></svg>
                          </button>
                        </div>
                        <button
                          className="btn btn-outline-primary pr-5 pl-5 mr-3"
                          onClick={async () => {
                            if (getCookie('Username') === null) navigate('/login');
                            else {
                              if (dataSelected.MA_SP === '') {
                                toast.warn('Please choose product', {
                                  position: 'top-right',
                                  autoClose: 5000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: 'light',
                                });
                                return;
                              }
                              var result = await ProductServices.AddToCart(getCookie('Username'), dataSelected);
                              if (result.data === 1) {
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
                              } else {
                                toast.error('Add error', {
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
                          }}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="btn btn-primary pr-5 pl-5"
                          onClick={async () => {
                            if (getCookie('Username') === null) navigate('/login');
                            else {
                              if (dataSelected.MA_SP === '') {
                                toast.warn('Please choose product', {
                                  position: 'top-right',
                                  autoClose: 5000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: 'light',
                                });
                                return;
                              }
                              var result = await ProductServices.AddToCart(getCookie('Username'), dataSelected);
                              if (result.data === 1) {
                                navigate('/my-cart')
                              } else {
                                toast.error('Add error', {
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
                          }}
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <div className="bg-w border rounded">
                {/* <!-- review-active --> */}
                <div className={`pl-3 pr-3 pt-2 ${styles['description-active']}`}>
                  <div className={`${styles['detail-product-navbar']} d-flex`}>
                    <button
                      className="p-5 pt-2 pb-2"
                      onClick={(e) => {
                        var node = e.target;
                        if (node.className !== `pl-3 pr-3 pt-2 ${styles['description-active']}`) {
                          while (node.className !== `pl-3 pr-3 pt-2 ${styles['review-active']}`) {
                            node = node.parentElement;
                          }
                          node.classList.remove(`${styles['review-active']}`);
                          node.classList.add(`${styles['description-active']}`);
                        }
                      }}
                    >
                      <span>Description</span>
                    </button>
                    <button
                      className="p-5 pt-2 pb-2"
                      onClick={(e) => {
                        var node = e.target;
                        if (node.className !== `pl-3 pr-3 pt-2 ${styles['review-active']}`) {
                          while (node.className !== `pl-3 pr-3 pt-2 ${styles['description-active']}`) {
                            node = node.parentElement;
                          }
                          node.classList.remove(`${styles['description-active']}`);
                          node.classList.add(`${styles['review-active']}`);
                        }
                      }}
                    >
                      <span>Review</span>
                    </button>
                  </div>
                </div>
                <div className="line"></div>
                <div className={`${styles['description-content']} p-3`}>
                  <p>{data[0][0].MO_TA}</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-primary p-5 pt-2 pb-2">See all</button>
                  </div>
                </div>
                <div className={`${styles['review']} p-4 pt-3 pb-3`}>
                  <div className={`${styles['review-list']}`}>
                    <div className={`${styles['review-item']} pb-3`}>
                      <div className={`${styles['review-info']} d-flex`}>
                        <span className={`${styles['review-name']}`}>Nguyen A</span>
                        <span className={`${styles['review-type']}`}>20cm-30cm-50cm x 2</span>
                        <div className="product-star d-flex">
                          <div className="svg-star d-flex">
                            <svg className="star" data-src="../../../../assets/svg/star.svg"></svg>
                            <svg className="star" data-src="../../../../assets/svg/star.svg"></svg>
                            <svg className="star" data-src="../../../../assets/svg/star.svg"></svg>
                            <svg className="star" data-src="../../../../assets/svg/star.svg"></svg>
                            <svg className="star" data-src="../../../../assets/svg/star.svg"></svg>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles['review-content']} mt-2 pb-3`}>Nai sừ</div>
                      <div className="line"></div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-outline-primary p-5 pt-2 pb-2">See more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {getCookie('Username') !== null && (
              <div className={`${styles['recomment']} p-4 bg-w rounded border`}>
                <div className="title par-line-2">
                  <h5>Favorite</h5>
                </div>
                <div className="">
                  {dataFavorite !== undefined &&
                    Object.keys(dataFavorite).map((index) => (
                      <Fragment key={index}>
                        {dataFavorite[index].ma_sp !== id && (
                          <>
                            <div className={`d-inline-block p-2`} style={{ maxWidth: '200px', minWidth: '200px' }}>
                              <a href={`/product/${dataFavorite[index].ma_sp}`}>
                                <div className={`${styles['recomment-item']} p-3`}>
                                  <div className={`${styles['recomment-item-img']}`}>
                                    <div
                                      className="background-img pt-100p"
                                      style={{
                                        backgroundImage: `url('${dataFavorite[index].hinhanh}')`,
                                      }}
                                    ></div>
                                  </div>
                                  <div className={`${styles['recomment-item-content']}`}>
                                    <div className={`${'price'}`}>${dataFavorite[index].gia_ban}</div>
                                    <div className={`${styles['name']} overflow-hidden mt-1`}>
                                      <h5 className="par-line-2">{dataFavorite[index].ten_sp}</h5>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {index % 4 !== 0 || (index === 0 && <div className="w-100"></div>)}
                          </>
                        )}
                      </Fragment>
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <a href="/favorite" className="btn btn-outline-primary p-5 pt-2 pb-2">
                    See more
                  </a>
                </div>
              </div>
            )}
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
export default Product;
