import React from 'react';

import styles from './Home.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import className from "className/bind";

// const cx = className.bind(styles);

function Home({ children }) {
  return (
    <>
      <div className="container">
        <div className={`${styles['main']} pt-4 pb-4`}>
          <div className={`${styles['menu-category']} pt-4 pb-4`}>
            <div className="row">
              <div className="col col-lg-2">
                <div className={`${styles['menu-category-item']} ${styles['menu-category-list']}`}>
                  <div className={`${styles['active']}`}>Automobiles</div>
                  <div>Clothes and wear</div>
                  <div>Home interiors</div>
                  <div>Computer and tech</div>
                  <div>Tools, equipments</div>
                  <div>Sports and outdoor</div>
                  <div>Animal and pets</div>
                  <div>Machinery tools</div>
                  <div>More category</div>
                </div>
              </div>
              <div className="col pl-3">
                <div className={`${styles['menu-category-item']}`}>
                  <a href="/products" className={`${styles['menu-category-item-link']}`}>
                    <div
                      className={`${styles['menu-category-img']} background-img pt-100p`}
                      style={{
                        backgroundImage: "url('../../../../assets/image/banner.png')",
                      }}
                    ></div>
                    <div className={`${styles['menu-category-content']}`}>
                      <div>
                        <span>Latest trending</span>
                      </div>
                      <div>
                        <span>iPhone 14 Pro Max</span>
                      </div>
                      <div>
                        <span>Learn more</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['deals-offers']} pt-4 pb-4`}>
            <div className="row">
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <div className={`${styles['deals-offers-item-title']}`}>
                  <h5>Deals and offers</h5>
                  <span>Hygiene equipments</span>
                </div>
                <div className={`${styles['deals-offers-item-timeout']} mt-2`}>
                  <div>
                    <span>04</span>
                    <span>Days</span>
                  </div>
                  <div>
                    <span>04</span>
                    <span>Hour</span>
                  </div>
                  <div>
                    <span>04</span>
                    <span>Min</span>
                  </div>
                  <div>
                    <span>04</span>
                    <span>Sec</span>
                  </div>
                </div>
              </div>
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <a href="/product">
                  <div className={`${styles['deals-offers-item-img']}`}>
                    <div
                      className="background-img pt-100p"
                      style={{
                        backgroundImage: "url('../../../../assets/image/clock.png')",
                      }}
                    ></div>
                  </div>
                  <div className={`${styles['deals-offers-item-content']}`}>
                    <div>
                      <span>Smart watches</span>
                    </div>
                    <div>
                      <span>-25%</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <a href="/product">
                  <div className={`${styles['deals-offers-item-img']}`}>
                    <div
                      className="background-img pt-100p"
                      style={{
                        backgroundImage: "url('../../../../assets/image/clock.png')",
                      }}
                    ></div>
                  </div>
                  <div className={`${styles['deals-offers-item-content']}`}>
                    <div>
                      <span>Smart watches</span>
                    </div>
                    <div>
                      <span>-25%</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <a href="/product">
                  <div className={`${styles['deals-offers-item-img']}`}>
                    <div
                      className="background-img pt-100p"
                      style={{
                        backgroundImage: "url('../../../../assets/image/clock.png')",
                      }}
                    ></div>
                  </div>
                  <div className={`${styles['deals-offers-item-content']}`}>
                    <div>
                      <span>Smart watches</span>
                    </div>
                    <div>
                      <span>-25%</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <a href="/product">
                  <div className={`${styles['deals-offers-item-img']}`}>
                    <div
                      className="background-img pt-100p"
                      style={{
                        backgroundImage: "url('../../../../assets/image/clock.png')",
                      }}
                    ></div>
                  </div>
                  <div className={`${styles['deals-offers-item-content']}`}>
                    <div>
                      <span>Smart watches</span>
                    </div>
                    <div>
                      <span>-25%</span>
                    </div>
                  </div>
                </a>
              </div>
              <div className={`col-2 ${styles['deals-offers-item']} p-3`}>
                <a href="/product">
                  <div className={`${styles['deals-offers-item-img']}`}>
                    <div
                      className="background-img pt-100p"
                      style={{
                        backgroundImage: "url('../../../../assets/image/clock.png')",
                      }}
                    ></div>
                  </div>
                  <div className={`${styles['deals-offers-item-content']}`}>
                    <div>
                      <span>Smart watches</span>
                    </div>
                    <div>
                      <span>-25%</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles['recomment']} pt-4 pb-4`}>
            <div className="title">
              <h5>Recommended items</h5>
            </div>
            <div className="row">
              <div className={`${styles['col']} col`}>
                <a href="/product">
                  <div className={`${styles['recomment-item']} p-3`}>
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-100"></div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={`${styles['col']} col`}>
                <div className={`${styles['recomment-item']} p-3`}>
                  <a href="/product">
                    <div className={`${styles['recomment-item-img']}`}>
                      <div
                        className="background-img pt-100p"
                        style={{
                          backgroundImage: "url('../../../../assets/image/clock.png')",
                        }}
                      ></div>
                    </div>
                    <div className={`${styles['recomment-item-content']}`}>
                      <div className={`${styles['price']}`}>$10.30</div>
                      <div className={`${styles['name']} overflow-hidden`}>
                        <h5 className="par-line-2">T-shirts with multiple colors, for men</h5>
                      </div>
                    </div>
                  </a>
                </div>
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
    </>
  );
}
export default Home;
