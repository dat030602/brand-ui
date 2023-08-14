import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import { eraseCookie, getCookie } from "~/utils/cookies";

import * as HeaderServices from "~/services/HeaderServices";
import { useLocation, useNavigate } from "react-router-dom";

function Header({ children, isPageNoSearch = false, isAdmin = false }) {
  var componentActive = "";
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(getCookie("Name"));
  const [typeProduct, setTypeProduct] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      let result = await HeaderServices.GetAllTypeProduct();
      setTypeProduct(result);
    };
    fetchApi();
    setTypeProduct(fetchApi());
  }, []);
  useEffect(() => {
    if (getCookie("Name") !== null) {
      setIsLogin(getCookie("Name"));
    } else {
      setIsLogin(false);
    }
  }, [location]);
  return (
    <>
      <header style={{ zIndex: "1" }}>
        <div className={!isAdmin ? "container" : "pl-4 pr-4"}>
          <div className={`${styles["header"]} row`}>
            <div className={`${styles["logo"]} col-md-auto`}>
              <a className={`${styles["logo-link"]}`} href="/">
                <img
                  src={`${
                    window.location.href.split("/").length - 1 >= 4 ? "../" : ""
                  }${
                    window.location.href.split("/").length - 1 >= 3 ? "../" : ""
                  }${
                    window.location.href.split("/").length - 1 >= 2 ? "." : ""
                  }./assets/image/logo-colored.png`}
                  alt="s"
                />
              </a>
            </div>
            {!isPageNoSearch && !isAdmin && (
              <div className={`${styles["search"]} col`}>
                <div className={`${styles["search-row"]} row`}>
                  <div className={`${styles["search-col"]} col-md-auto`}>
                    <input
                      className={`${styles["input"]}`}
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <div className={`${styles["search-col"]} col-md-auto`}>
                    <select className={`${styles["selection"]}`}>
                      <option value="">All category</option>
                      {typeProduct !== undefined &&
                        Object.keys(typeProduct).map((index) => (
                          <option
                            value={typeProduct[index].MA_LOAI_SP}
                            key={index}
                          >
                            {typeProduct[index].TEN_LOAI_SP}
                          </option>
                        ))}
                    </select>
                  </div>
                  <a
                    href="/products"
                    className={`${styles["icon-search"]} col-md-auto ${styles["search-col"]}`}
                  >
                    <img
                      src={`${
                        window.location.href.split("/").length - 1 >= 4
                          ? "../"
                          : ""
                      }${
                        window.location.href.split("/").length - 1 >= 3
                          ? "../"
                          : ""
                      }${
                        window.location.href.split("/").length - 1 >= 2
                          ? "."
                          : ""
                      }./assets/svg/search.svg`}
                      alt="d"
                    />
                  </a>
                </div>
              </div>
            )}
            <div className={`${styles["action"]} col-md-auto`}>
              <div className="row">
                {isLogin && isAdmin && (
                  <div className="col ml-2 d-flex justify-content-end">
                    <div
                      href="/"
                      className="btn btn-danger p-1 pr-2 pl-2"
                      onClick={() => {
                        eraseCookie("Name");
                        eraseCookie("Username");
                        eraseCookie("Token");
                        navigate("/");
                      }}
                    >
                      Logout
                    </div>
                  </div>
                )}
                {!isLogin && (
                  <div className="col ml-2">
                    <a
                      href="/login"
                      className="btn btn-outline-primary p-1 pr-2 pl-2"
                    >
                      Sign in
                    </a>
                  </div>
                )}
                {!isLogin && (
                  <div className="col ml-2">
                    <a
                      href="/register"
                      className="btn btn-primary p-1 pr-2 pl-2"
                    >
                      Register
                    </a>
                  </div>
                )}
                {isLogin && !isAdmin && (
                  <div className="col ml-2">
                    <a
                      href="/personal/edit"
                      className={`${styles["action-icon"]}`}
                    >
                      <img
                        src={`${
                          window.location.href.split("/").length - 1 >= 4
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 3
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 2
                            ? "."
                            : ""
                        }./assets/svg/profile.svg`}
                        alt="/"
                      />
                      <span>Profile</span>
                    </a>
                  </div>
                )}
                {isLogin && !isAdmin && (
                  <div className="col ml-2">
                    <a href="/favorite" className={`${styles["action-icon"]}`}>
                      <img
                        src={`${
                          window.location.href.split("/").length - 1 >= 4
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 3
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 2
                            ? "."
                            : ""
                        }./assets/svg/favourite.svg`}
                        alt="/"
                      />
                      <span>Favorite</span>
                    </a>
                  </div>
                )}
                {isLogin && !isAdmin && (
                  <div className="col ml-2">
                    <a href="/my-cart" className={`${styles["action-icon"]}`}>
                      <img
                        src={`${
                          window.location.href.split("/").length - 1 >= 4
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 3
                            ? "../"
                            : ""
                        }${
                          window.location.href.split("/").length - 1 >= 2
                            ? "."
                            : ""
                        }./assets/svg/cart.svg`}
                        alt="/"
                      />
                      <span>Cart</span>
                      <div className={`${styles["amount"]}`}>1</div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        {!isPageNoSearch && !isAdmin && (
          <div className="container">
            <div className={`${styles["menu"]}`}>
              <div className={`${styles["menu-item"]}`}>
                <div>
                  <img
                    src={`${
                      window.location.href.split("/").length - 1 >= 4
                        ? "../"
                        : ""
                    }${
                      window.location.href.split("/").length - 1 >= 3
                        ? "../"
                        : ""
                    }${
                      window.location.href.split("/").length - 1 >= 2 ? "." : ""
                    }./assets/svg/menu.svg`}
                    alt=""
                  />
                </div>
                <div>All category</div>
              </div>
              <div className={`${styles["menu-item"]}`}>
                <a href="/hot-offers">Hot offers</a>
              </div>
            </div>
          </div>
        )}
        {!isPageNoSearch && <div className="line"></div>}
      </header>
    </>
  );
}
export default Header;
