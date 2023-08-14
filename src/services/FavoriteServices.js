import * as httpRequest from '~/utils/httpRequest';

export const GetProducts = async (username = '') => {
  try {
    const res = await httpRequest.Get(`/favorite/`, { params: { username } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const DeleteFavorite = async (id = '', username = '') => {
  try {
    const res = await httpRequest.Delete(`/favorite/`, { data: { id, username } });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
