import * as httpRequest from '~/utils/httpRequest';
export const GetRewardPoint = async (username = '') => {
  try {
    const res = await httpRequest.Get(`/loyalty/`, { params: { username } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
