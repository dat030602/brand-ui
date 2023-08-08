import * as httpRequest from '~/utils/httpRequest';
export const GetAllVouchers = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-vouchers/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const AddVoucher = async (data = {}) => {
  try {
    const res = await httpRequest.Post(`/manage-vouchers/`, {
      data,
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
export const EditVoucher = async (data = {}) => {
  try {
    const res = await httpRequest.Put(`/manage-vouchers/`, {
      data,
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
export const DeleteVoucher = async (voucher_id = '') => {
  try {
    const res = await httpRequest.Delete(`/manage-vouchers/`, {
      data: { voucher_id },
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
