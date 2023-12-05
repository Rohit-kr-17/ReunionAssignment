import client from "./client";
export const fetchProperty = async () => {
	try {
		const { data } = await client.get("../house/get-property");

		return data;
	} catch (error) {
		const { response } = error;
		if (response?.data) return response.data;
		return { error: error.message || error };
	}
};
export const filterProperty = async (filter) => {
	try {
		console.log(filter);
		const { data } = await client.get("../house/filter-properties", {
			params: filter,
		});
		console.log(data);
		return data;
	} catch (error) {
		const { response } = error;
		if (response?.data) return response.data;
		return { error: error.message || error };
	}
};
export const fetchMyListing = async (id) => {
	const token = localStorage.getItem("auth-token");
	try {
		const { data } = await client.get(`../house/get-property/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				accept: "application/json",
			},
		});
		return data;
	} catch (error) {
		const { response } = error;
		if (response?.data) return response.data;
		return { error: error.message || error };
	}
};
