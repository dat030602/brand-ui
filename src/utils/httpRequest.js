import axios from "axios";

const httpRequest = axios.create({
	baseURL: "http://localhost:5000",
	// headers: {
	// 	Accept: "application/json",
	// 	"Content-Type": "application/json",
	// },
});

export const Get = async (path, options = {}) => {
	const response = await httpRequest.get(path, options);
	return response.data;
};
export const Post = async (path, data = {}, options = {}) => {
	const response = await httpRequest.post(path, data, options);
	return response;
};
export const Put = async (path, data = {}, options = {}) => {
	const response = await httpRequest.put(path, data, options);
	return response;
};
export const Delete = async (path, options = {}) => {
	const response = await httpRequest.delete(path, options);
	return response;
};
export default httpRequest;
