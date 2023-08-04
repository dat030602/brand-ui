import * as httpRequest from "~/utils/httpRequest";
export const GetAllCart = async (id = "") => {
  try {
    const res = await httpRequest.Get(`/my-cart`);
    return res;
  } catch (error) {
    console.log("error");
  }
};
