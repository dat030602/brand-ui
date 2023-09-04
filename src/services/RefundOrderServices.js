import * as httpRequest from '~/utils/httpRequest';
export const AddNewRefundRequest = async (data = {}) => {
  // try {
  //   const formData = new FormData();
  //   formData.append('imageUpload', data.image);
  //   formData.append('data', JSON.stringify(data));
  //   const res = await httpRequest.Post(`/refund/detail`, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  //   return res;
  // } catch (error) {
  //   console.log('error');
  // }
  try {
    const res = await httpRequest.Post(`/refund/`, {
      data,
    });
    return res.data;
  } catch (error) {
    console.log('error');
  }
};
