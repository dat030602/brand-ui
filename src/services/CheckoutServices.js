import * as httpRequest from '~/utils/httpRequest';
import { getCookie } from '~/utils/cookies';

export const GetCartItem = async (username = '') => {
  try {
    const res = await httpRequest.Get(`/user/cartitem?id_user=${username}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetAddress = async (id_user = '') => {
  try {
    const res = await httpRequest.Get(`/user/address?id_user=${id_user}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetShipData = async (id_user = '', index = 0) => {
  try {
    const res = await httpRequest.Get(`/user/shipdata?id_user=${id_user}&index=${index}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const ChangeItemCartAmount = async (data = {}) => {
  try {
    const res = await httpRequest.Put('/user/updateCart', {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Payment = async (data = {}) => {
  try {
    const res = await httpRequest.Post('/user/payment', {
      data,
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const ConfirmPayPalApi = async (data = {}) => {
  try {
    const res = await httpRequest.Post('/user/confirmPaypal', {
      data,
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const CancelPayPalApi = async (data = {}) => {
  try {
    const res = await httpRequest.Post('/user/cancelPaypal', {
      data,
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
