import * as httpRequest from "~/utils/httpRequest";
//Get all product type
export const GetAllTypeProduct = async (id = "") => {
	try {
		const res = await httpRequest.Get(`/manage-products/type-product`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
//Recommend search
export const GetAllProduct = async () => {
	try {
		const res = await httpRequest.Get(`/search/all`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const GetProductsByType = async (category ='') => {
	try {
		const res = await httpRequest.Get(`/search/category`, { params: { category:category } });
		return res;
	} catch (error) {
		console.log("error");
	}
};
//Handle Click Search
export const SearchAllProduct = async (key ='') => {
	try {
		const res = await httpRequest.Get(`/search/findall`, { params: { key:key} });
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const SearchProductsByType = async (type ='', key='') => {
	try {
		const res = await httpRequest.Get(`/search/find`, { params: { type:type, key:key } });
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const GetAllBrand = async () => {
	try {
		const res = await httpRequest.Get(`/search/brand/all`);
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const FilterProducts = async (type ='', brand ='', price='', rating='') => {
	try {
		const res = await httpRequest.Get(`/search/filter`, { params: { type:type, brand:brand, price: price, rating:rating}});
		return res;
	} catch (error) {
		console.log("error");
	}
};