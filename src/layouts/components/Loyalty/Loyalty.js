import React, { useEffect, useState } from 'react';
import { eraseCookie } from '~/utils/cookies';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Loyalty.module.scss';
import * as LoyaltyServices from '~/services/LoyaltyServices';
import { getCookie } from '~/utils/cookies';
import LoadingPage from '../LoadingPage/LoadingPage';

function Loyalty({ children }) {
  const navigate = useNavigate();
  const [rewardpointdata, setRewardPointData] = useState();

  const fetchApi = async () => {
    let result = await LoyaltyServices.GetRewardPoint(getCookie('Username'));
    setRewardPointData(result[0]);
    console.log(result[0]);
    console.log('3', rewardpointdata);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {rewardpointdata !== undefined && (
        <div className="container">
          <div className="main pt-4 pb-4">
            <div className="row">
              <div className="col-2">
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/info">Personal info</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/my-cart">My cart</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/favorite">Favorite</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
                  <a href="/orders-history">Orders history</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2 ${styles['active']}`}>
                  <a href="/loyalty">Loyalty Program</a>
                </div>
                <div className={`${styles['side-item']} rounded pl-3 p-1 mb-2`}>
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
                  <div className={`${styles['title']} pb-3`}>
                    <h3>My Loyalty Program</h3>
                  </div>
                  <div className="line"></div>
                  <div className="mt-4">
                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Total Reward Point:
                      </label>
                      <div className="d-flex align-items-center">
                        <span className="text-primary  text-bold-normal">{rewardpointdata[0].TONGDIEM}</span>
                      </div>
                    </div>

                    <div className={`${styles['item']} d-flex mb-3`}>
                      <label htmlFor="" className="d-flex align-items-center justify-content-end mr-4">
                        Today's Reward Point:
                      </label>
                      <div className="d-flex align-items-center">
                        <span className="text-primary text-bold-normal">{rewardpointdata[0].DIEMHOMNAY}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {rewardpointdata === undefined && <LoadingPage />}
    </>
  );
}
export default Loyalty;
