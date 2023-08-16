import React, { useEffect, useState } from 'react';
import { eraseCookie, getCookie } from '~/utils/cookies';
import { useLocation } from 'react-router-dom';

import styles from './HeaderAdmin.module.scss';
import { Image } from '~/components/Image';

function HeaderAdmin({ children }) {
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
        <div className="pl-4 pr-4">
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
                  <div className="col ml-2 d-flex justify-content-end">
                    <div
                      href="/"
                      className="btn btn-danger p-1 pr-2 pl-2"
                      onClick={() => {
                        eraseCookie('Name');
                        eraseCookie('Username');
                        eraseCookie('Token');
                        window.location.reload(true);
                      }}
                    >
                      Logout
                    </div>
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
export default HeaderAdmin;
