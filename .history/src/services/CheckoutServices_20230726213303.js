import * as httpRequest from "~/utils/httpRequest";
import { getCookie } from "~/utils/cookies";

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

export const Payment = async (data = {}) => {
  try {
    const username = getCookie("Username");

    const res = await httpRequest.Post("/user/payment", {
      data,
      username: username,
    });
    return res;
  } catch (error) {
    console.log("error");
  }
};
