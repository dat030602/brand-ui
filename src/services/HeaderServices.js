import * as httpRequest from "~/utils/httpRequest";

export const GetAllTypeProduct = async (id = "") => {
	try {
		const res = await httpRequest.Get(`/manage-products/type-product`);
		return res;
	} catch (error) {
		console.log("error");
	}
};