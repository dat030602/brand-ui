import * as httpRequest from '~/utils/httpRequest';
export const GetAllCart = async (MAKHACH = '') => {
  try {
    const res = await httpRequest.Get(`/my-cart`, {
      params: { MAKHACH },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetCartTotal = async (MAKHACH = '') => {
  try {
    const res = await httpRequest.Get(`/my-cart/total`, {
      params: { MAKHACH },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const RemoveFromCart = async (MAKHACH = '', MA_SP = '', STT = -1) => {
  try {
    const res = await httpRequest.Delete(`/my-cart`, {
      data: { MAKHACH, MA_SP, STT },
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};

export const UpdateQuantity = async (MAKHACH = '', MA_SP = '', STT = -1, SO_LUONG = 0) => {
  try {
    const res = await httpRequest.Put(`/my-cart`, {
      data: { MAKHACH, MA_SP, STT, SO_LUONG },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
