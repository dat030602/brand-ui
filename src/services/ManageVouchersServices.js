import * as httpRequest from "~/utils/httpRequest";
export const GetAllVouchers = async (id = "") => {
	try {
		const res = await httpRequest.Get(`/manage-vouchers/`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const AddVoucher = async (data = {}) => {
	try {
		const formData = new FormData();
		for (let index = 0; index < data.detail.length; index++) {
			const element = data.detail[index];
			formData.append("imageUpload", element.image);
		}
		formData.append("data", JSON.stringify(data));
		const res = await httpRequest.Post(`/manage-vouchers`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const EditVoucher_TEN_SP = async (masp, tensp) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/ten-san-pham`, {
			data: { masp, tensp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditVoucher_TEN_LOAI_SP = async (masp, tenloaisp) => {
	try {
		console.log(masp, tenloaisp);
		const res = await httpRequest.Put(`/manage-vouchers/edit/ten-loai-san-pham`, {
			data: { masp, tenloaisp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditVoucher_MO_TA = async (masp, mota) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/mo-ta`, {
			data: { masp, mota },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditVoucher_BRAND = async (masp, brand) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/brand`, {
			data: { masp, brand },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailVoucher_TEN_CTSP = async (masp, stt, tenctsp) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/ten-chi-tiet-san-pham`, {
			data: { masp, stt, tenctsp },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailVoucher_GIA_BAN = async (masp, stt, giaban) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/gia-ban`, {
			data: { masp, stt, giaban },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailVoucher_GIA_NHAP = async (masp, stt, gianhap) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/gia-nhap`, {
			data: { masp, stt, gianhap },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const EditDetailVoucher_SL_KHO = async (masp, stt, slkho) => {
	try {
		const res = await httpRequest.Put(`/manage-vouchers/edit/so-luong-kho`, {
			data: { masp, stt, slkho },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};
export const DeleteVoucher = async (masp = "") => {
	try {
		const res = await httpRequest.Delete(`/manage-vouchers/`, {
			data: { masp },
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
