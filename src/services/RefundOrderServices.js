import * as httpRequest from '~/utils/httpRequest';

export const AddNewRefundRequest = async (data = {}) => {
  try {
    const formData = new FormData();
    formData.append('imageUpload', data.image);
    formData.append('data', JSON.stringify(data));

    const res = await httpRequest.Post(`/refund/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const CancelRefund = async (refundID = '', orderID = '') => {
  try {
    const res = await httpRequest.Put(`/refund/${refundID}/cancel`, {
      data: { refundID, orderID },
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};

export const GetOrderRefundRequest = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/refund/${id}`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const GetRefundDetail = async (id = '') => {
  try {
    const res = await httpRequest.Get(`/refund/${id}/detail`);
    return res;
  } catch (error) {
    console.log('error');
  }
};
