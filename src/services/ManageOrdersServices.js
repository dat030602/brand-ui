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
    const res = await httpRequest.Get(`/manage-orders/${id}/order-detail/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const UpdateOrderStatus = async (id = '', status = '') => {
  try {
    const res = await httpRequest.Put(`/manage-orders/${id}/${status}`);
    return res.data;
  } catch (error) {
    console.log('error');
  }
};

export const GetOrderRefundRequest = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-orders/${id}/refund-request/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetRefundDetail = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-orders/${id}/refund-request/detail`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const UpdateRefundStatus = async (orderid = '', orderstatus = '', refundstatus = '') => {
  try {
    const res = await httpRequest.Put(`/manage-orders/${orderid}/refund-request/update`, {
      data: { orderid, orderstatus, refundstatus },
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};

export const GetOrderHistory = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/manage-orders/history`, { params: { id:id}});
    return res;
  } catch (error) {
    console.log('error');
  }
};