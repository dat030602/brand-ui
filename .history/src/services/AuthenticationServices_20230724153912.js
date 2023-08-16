import * as httpRequest from "~/utils/httpRequest";
export const Login = async (data = {}) => {
	try {
		const res = await httpRequest.Post(`/authentication/login`, { data });
		return res;
	} catch (error) {
		console.log("error");
	}
};
export const Register = async (data = {}) => {
	try {
		const res = await httpRequest.Post(`/authentication/register`, { data });
		return res;
	} catch (error) {
		console.log("error");
	}
};
