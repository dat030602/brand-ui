import * as httpRequest from "~/utils/httpRequest";
export const GetAllProducts = async (id = "") => {
	try {
		const res = await httpRequest.Get(`/manage-products/`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const GetAllTypeProduct = async (id = "") => {
	try {
		const res = await httpRequest.Get(`/manage-products/type-product`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const AddProduct = async (data = {}) => {
	try {
		const res = await httpRequest.Post(`/manage-products/`, {
			data: data,
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_TEN_SP = async (masp, tensp) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/ten-san-pham`, {
			data: { masp, tensp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_TEN_LOAI_SP = async (masp, tensp) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/ten-loai-san-pham`, {
			data: { masp, tensp },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_MO_TA = async (masp, mota) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/mo-ta`, {
			data: { masp, mota },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_BRAND = async (masp, brand) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/brand`, {
			data: { masp, brand },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_TEN_CTSP = async (masp, stt, tenctsp) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/ten-chi-tiet-san-pham`, {
			data: { masp, stt, tenctsp },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_GIA_BAN = async (masp, stt, giaban) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/gia-ban`, {
			data: { masp, stt, giaban },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_GIA_NHAP = async (masp, stt, gianhap) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/gia-nhap`, {
			data: { masp, stt, gianhap },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_SL_KHO = async (masp, stt, slkho) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/so-luong-kho`, {
			data: { masp, stt, slkho },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_HINHANHSP = async (masp, stt, hinhanh) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/hinh-anh`, {
			data: { masp, stt, hinhanh },
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const DeleteProduct = async (id = "") => {
	try {
		const res = await httpRequest.Delete(`/manage-products/`, {
			id: id,
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const DeleteDetailProduct = async (masp = "", stt = -1) => {
	try {
		const res = await httpRequest.Delete(`/manage-products/delete-detail`, {
			masp: masp,
			stt: stt,
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};

export const AddImage = async (data) => {
	try {
		const formData = new FormData()
		console.log("It works")
		formData.append("imageUpload", data)
		const res = await httpRequest.Post(
			`/file/upload-image`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		return res;
	} catch (error) {
		console.log("error");
	}
};
