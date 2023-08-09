import * as httpRequest from '~/utils/httpRequest';
export const GetAllVouchers = async (id = 1) => {
  try {
    const res = await httpRequest.Get(`/voucher/`, { params: { id } });
    return res;
  } catch (error) {
    console.log('error');
  }
};
