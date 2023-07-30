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
		const formData = new FormData();
		for (let index = 0; index < data.detail.length; index++) {
			const element = data.detail[index];
			formData.append("imageUpload", element.image);
		}
		formData.append("data", JSON.stringify(data));
		const res = await httpRequest.Post(`/manage-products`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const AddDetailProduct = async (data = {}) => {
	try {
		const formData = new FormData();
		formData.append("imageUpload", data.image);
		formData.append("data", JSON.stringify(data));
		const res = await httpRequest.Post(`/manage-products/detail`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
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
export const EditProduct_TEN_LOAI_SP = async (masp, tenloaisp) => {
	try {
		console.log(masp, tenloaisp);
		const res = await httpRequest.Put(`/manage-products/edit/ten-loai-san-pham`, {
			data: { masp, tenloaisp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_MO_TA = async (masp, mota) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/mo-ta`, {
			data: { masp, mota },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditProduct_BRAND = async (masp, brand) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/brand`, {
			data: { masp, brand },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_TEN_CTSP = async (masp, stt, tenctsp) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/ten-chi-tiet-san-pham`, {
			data: { masp, stt, tenctsp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_GIA_BAN = async (masp, stt, giaban) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/gia-ban`, {
			data: { masp, stt, giaban },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_GIA_NHAP = async (masp, stt, gianhap) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/gia-nhap`, {
			data: { masp, stt, gianhap },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailProduct_SL_KHO = async (masp, stt, slkho) => {
	try {
		const res = await httpRequest.Put(`/manage-products/edit/so-luong-kho`, {
			data: { masp, stt, slkho },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
// export const EditDetailProduct_HINHANHSP = async (masp, stt, hinhanh) => {
// 	try {
// 		const res = await httpRequest.Put(`/manage-products/edit/hinh-anh`, {
// 			data: { masp, stt, hinhanh },
// 		});
// 		return res.data
// 	} catch (error) {
// 		console.log("error");
// 	}
// };
export const DeleteProduct = async (masp = "") => {
	try {
		const res = await httpRequest.Delete(`/manage-products/`, {
			data: { masp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const DeleteDetailProduct = async (masp = "", stt = -1) => {
	try {
		const res = await httpRequest.Delete(`/manage-products/delete-detail`, {
			data: { masp, stt },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};

export const AddImage = async (data, masp, stt) => {
	try {
		const formData = new FormData();
		formData.append("imageUpload", data);
		formData.append("masp", masp);
		formData.append("stt", stt);
		const res = await httpRequest.Post(`/file/upload-image`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditImage = async (data, masp, stt, fileNameDelete) => {
	try {
		const formData = new FormData();
		formData.append("imageUpload", data);
		formData.append("masp", masp);
		formData.append("stt", stt);
		formData.append("fileNameDelete", fileNameDelete);
		const res = await httpRequest.Put(`/file/edit-image`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
