import * as httpRequest from '~/utils/httpRequest';
export const GetAllCustomers = async () => {
  try {
    const res = await httpRequest.Get(`/manage-customers/`);
    return res;
  } catch (error) {
    console.log('error');
  }
};

export const EditCustomer = async (makh, name, email, sdt, date, status) => {
	try {
		const res = await httpRequest.Put(`/manage-customers/edit`, {
			data: { makh, name, email, sdt, date, status },
		});
		return res.data;
	} catch (error) {
		console.log("error");
	}
};