import * as httpRequest from '~/utils/httpRequest';
export const GetAllOrders = async () => {
  try {
    const res = await httpRequest.Get(`/manage-orders/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetOrderDetail = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-orders/order-detail/${id}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const UpdateOrderStatus = async (id = '', status = '') => {
  try {
    const res = await httpRequest.Put(`/manage-orders/order-detail/${id}/${status}`);
    return res.data;
  } catch (error) {
    console.log('error');
  }
};

export const GetOrderHistory = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-orders/history`, { params: { id: id } });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const CheckExpireOrder = async (query = '') => {
  try {
    const res = await httpRequest.Get(`/user/checkexpire?id_user=${query}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const CancelOrder = async (data = {}) => {
  try {
    const res = await httpRequest.Post(`/user/cancelOrder`, data);
    return res;
  } catch (error) {
    console.log('error');
  }
};
