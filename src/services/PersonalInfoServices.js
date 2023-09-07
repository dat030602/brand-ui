import * as httpRequest from '~/utils/httpRequest';
export const GetData = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/info/`, {
      params: {
        username: id,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetAddress = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/info/address`, {
      params: {
        username: id,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const AddAddress = async (username = '', data) => {
  try {
    const res = await httpRequest.Post(`/info/`, {
      data: {
        username,
        data,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const EditAddress = async (username = '', data) => {
  try {
    const res = await httpRequest.Put(`/info/`, {
      data: {
        username,
        data,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const DeleteAddress = async (username = '', stt = '') => {
  try {
    const res = await httpRequest.Delete(`/info/`, {
      data: {
        username,
        stt,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};
