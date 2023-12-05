import client from "./client.js";
export const signUpUser = async (userInfo) => {
	try {
		const { data } = await client.post("../user/sign-up", userInfo);
		return data;
	} catch (error) {
		const { response } = error;
		if (response?.data) return response.data;
		return { error: error.message || error };
	}
};
export const signInUser = async (userInfo) => {
	try {
		const { data } = await client.post("../user/sign-in", userInfo);

		return data;
	} catch (error) {
		const { response } = error;
		if (response?.data) return response.data;
		return { error: error.message || error };
	}
};

export const getIsAuth = async (token) => {
	try {
		const { data } = await client.get("../user/is-auth", {
			headers: {
				authorization: "Bearer " + token,
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
