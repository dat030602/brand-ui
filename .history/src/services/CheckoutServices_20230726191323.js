import * as httpRequest from "~/utils/httpRequest";
export const GetCartItem = async (username = "") => {
  try {
    const res = await httpRequest.Get(`/user/cartitem?id_user=${username}`);
    return res;
  } catch (error) {
    console.log("error");
  }
};

export const GetAddress = async (id_user = "") => {
  try {
    const res = await httpRequest.Get(`/user/address?id_user=${id_user}`);
    return res;
  } catch (error) {
    console.log("error");
  }
};
