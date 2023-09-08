import React, { useEffect, useState } from 'react';
import { getCookie } from '~/utils/cookies';
import { useLocation } from 'react-router-dom';

import styles from './HeaderNoSearch.module.scss';
import { Image } from '~/components/Image';

function HeaderNoSearch({ children }) {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(getCookie('Name'));

  useEffect(() => {
    if (getCookie('Name') !== null) {
      setIsLogin(getCookie('Name'));
    } else {
      setIsLogin(false);
    }
  }, [location]);
  return (
    <>
      <header>
        <div className="container">
          <div className={`${styles['header']} row`}>
            <div className={`${styles['logo']} col-md-auto`}>
              <a className={`${styles['logo-link']}`} href="/">
                <Image
                  src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                    window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                  }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/image/logo-colored.png`}
                  alt="s"
                />
              </a>
            </div>
            <div className={`${styles['action']} col-md-auto`}>
              <div className="row">
              {isLogin && (
                  <div className="col ml-10 d-flex">
                    <a href="https://m.me/lethungan.190702" className={`${styles['action-icon']}`}>
                      <Image
                        src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                          window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                        }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/chatbox.svg`}
                        alt="/"
                      />
                      <span>Chatbox</span>
                    </a>
                  </div>
                )}
                {isLogin && (
                  <div className="col ml-10 d-flex">
                  <a href="/info" className={`${styles['action-icon']}`}>
                    <Image
                      src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                        window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                      }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/profile.svg`}
                      alt="/"
                    />
                    <span>Profile</span>
                  </a>
                </div>
                )}

                {isLogin && (
                  <div className="col ml-10 d-flex">
                    <a href="/favorite" className={`${styles['action-icon']}`}>
                      <Image
                        src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                          window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                        }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/favourite.svg`}
                        alt="/"
                      />
                      <span>Favorite</span>
                    </a>
                  </div>
                )}
                {isLogin && (
                  <div className="col ml-10 d-flex">
                    <a href="/my-cart" className={`${styles['action-icon']}`}>
                      <Image
                        src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                          window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                        }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/cart.svg`}
                        alt="/"
                      />
                      <span>Cart</span>
                      <div className={`${styles['amount']}`}>1</div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
}
export default HeaderNoSearch;
