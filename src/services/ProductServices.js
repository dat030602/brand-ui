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
export const AddToCart = async (username = '', data = {}) => {
  try {
    if (username === null) username = '';
    const res = await httpRequest.Post(`/product/add-to-cart`, { data: { username, data } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const Favorite = async (id = '', username = '') => {
  try {
    console.log(id, username);
    const res = await httpRequest.Post(`/product/favorite`, { data: { id, username } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
