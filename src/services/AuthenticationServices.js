import * as httpRequest from '~/utils/httpRequest';
export const Login = async (data = {}) => {
  try {
    const res = await httpRequest.Post(`/authentication/login`, { data });
    return res;
  } catch (error) {
    console.log('error');
  }
};
export const Register = async (data = {}) => {
  try {
    const res = await httpRequest.Post(`/authentication/register`, { data });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const Profile = async (user = '') => {
  try {
    const res = await httpRequest.Get(`/authentication/`, {
      params: {
        user: user,
      },
    });
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const EditProfile = async (data = {}) => {
  try {
    const res = await httpRequest.Put(`/authentication/edit-profile`, { data });
    return res;
  } catch (error) {
    console.log('error');
  }
};
