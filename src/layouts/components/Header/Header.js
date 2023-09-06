import React, { useEffect, useState } from 'react';
import { getCookie } from '~/utils/cookies';
import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import FuzzySearch from 'fuzzy-search';
import styles from './Header.module.scss';
import * as HeaderServices from '~/services/HeaderServices';
import { Image } from '~/components/Image';

function Header({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(getCookie('Name'));
  const [typeProduct, setTypeProduct] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      let result = await HeaderServices.GetAllTypeProduct();
      setTypeProduct(result);
    };
    fetchApi();
    setTypeProduct(fetchApi());
    const queryParameters = new URLSearchParams(window.location.search);
    var input = queryParameters.get('q');
    if (input !== null) setInput(input);
    var type = queryParameters.get('t');
  }, []);
  useEffect(() => {
    if (getCookie('Name') !== null) {
      setIsLogin(getCookie('Name'));
    } else {
      setIsLogin(false);
    }
  }, [location]);

  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [dataset, setdataset] = useState();
  const searcher = new FuzzySearch(dataset, ['TEN_SP'], {
    caseSensitive: false,
    sort: true,
  });
  const handleChange = (value) => {
    setInput(value);
    if (value === '') {
      setResults('');
    } else {
      setResults(searcher.search(value).slice(0, 5));
    }
  };
  const handleSearch = () => {
    var cat = document.getElementById('getvalueoption').value;
    var b = '0';
    window.location.href = '/products' + `?${createSearchParams({ f: b, q: input, t: cat })}`;
    // navigate({
    //   pathname: '/products',
    //   search: `?${createSearchParams({ q: input, t: cat })}`,
    // });
  };

  const getallproduct = async () => {
    let result = await HeaderServices.GetAllProduct();
    setdataset(result);
  };
  const getallproductbytype = async () => {
    var cat = document.getElementById('getvalueoption').value;
    let result = await HeaderServices.GetProductsByType(cat);
    setdataset(result);
  };

  useEffect(() => {
    getallproduct();
  }, []);

  const handleChangeType = () => {
    var cat = document.getElementById('getvalueoption').value;
    if (cat === '') {
      getallproduct();
    } else {
      getallproductbytype();
    }
  };
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
            {!isPageNoSearch && !isAdmin && (
              <div className={`${styles['search']} col`}>
                <div className={`${styles['search-row']} row`}>
                  <div className={`${styles['search-col']} col-md-auto`}>
                    <input
                      name="selectop"
                      className={`${styles['input']}`}
                      type="text"
                      placeholder="Search..."
                      value={input}
                      onChange={(e) => handleChange(e.target.value)}
                      onFocus={(e) => {
                        var parent = e.target.parentElement;
                        parent = parent.parentElement;
                        parent = parent.parentElement;
                        var child = parent.childNodes[1];
                        child.classList.add(styles['focus']);
                      }}
                      onBlur={(e) => {
                        var parent = e.target.parentElement;
                        parent = parent.parentElement;
                        parent = parent.parentElement;
                        var child = parent.childNodes[1];
                        child.classList.remove(styles['focus']);
                      }}
                    />
                  </div>
                  <div className={`${styles['search-col']} col-md-auto`}>
                    <select
                      className={`${styles['selection']}`}
                      id="getvalueoption"
                      onChange={() => handleChangeType()}
                    >
                      <option value="">All category</option>
                      {typeProduct !== undefined &&
                        Object.keys(typeProduct).map((index) => (
                          <option value={typeProduct[index].TEN_LOAI_SP} key={index}>
                            {typeProduct[index].TEN_LOAI_SP}
                          </option>
                        ))}
                    </select>
                  </div>
                  <a onClick={handleSearch} className={`${styles['icon-search']} col-md-auto ${styles['search-col']}`}>
                    <Image
                      src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                        window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                      }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/search.svg`}
                      alt="d"
                    />
                  </a>
                </div>
                <div className={`${styles['dropdown']}`}>
                  <div className={`${styles['dropdown-row']}`} style={{ padding: results.length !== 0 ? '8px' : '0' }}>
                    {results &&
                      results.map((result, id) => {
                        return (
                          <div className={`${styles['e']}`} key={id}>
                            <a href="/product">{result.TEN_SP}</a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
            <div className={`${styles['action']} col-md-auto`}>
              <div className="row">
                {!isLogin && (
                  <div className="col ml-2">
                    <a href="/login" className="btn btn-outline-primary p-1 pr-2 pl-2">
                      Sign in
                    </a>
                  </div>
                )}
                {!isLogin && (
                  <div className="col ml-2">
                    <a href="/register" className="btn btn-primary p-1 pr-2 pl-2">
                      Register
                    </a>
                  </div>
                )}
                {isLogin && (
                  <>
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
                    <div className="col ml-10 d-flex">
                      <a href="/personal/edit" className={`${styles['action-icon']}`}>
                        <Image
                          src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                            window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                          }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/profile.svg`}
                          alt="/"
                        />
                        <span>Profile</span>
                      </a>
                    </div>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>

        <div className="container">
          <div className={`${styles['menu']}`}>
            <div className={`${styles['menu-item']}`}>
              <div>
                <Image
                  src={`${window.location.href.split('/').length - 1 >= 4 ? '../' : ''}${
                    window.location.href.split('/').length - 1 >= 3 ? '../' : ''
                  }${window.location.href.split('/').length - 1 >= 2 ? '.' : ''}./assets/svg/menu.svg`}
                  alt=""
                />
              </div>
              <div>All category</div>
            </div>
            <div className={`${styles['menu-item']}`}>
              <a href="/hot-offers/1">Hot offers</a>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </header>
    </>
  );
}
export default Header;
