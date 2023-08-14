import * as httpRequest from '~/utils/httpRequest';
export const GetProduct = async (id = '', username = '') => {
  try {
    if (username === null) username = '';
    const res = await httpRequest.Get(`/product/`, { params: { id, username } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
