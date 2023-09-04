import * as httpRequest from '~/utils/httpRequest';

export const GetData = async () => {
  try {
    const res = await httpRequest.Get(`/home/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};