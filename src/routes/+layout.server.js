import { jwtDecode } from "jwt-decode";

export async function load({ cookies}) {
	const token = cookies.get('jwtToken');
	const isLoggedIn = false;
	const loginUrl = `${import.meta.env.VITE_AUTH_URL}/AuthMe`
	const testUrl = `${import.meta.env.VITE_AUTH_URL}/TestMe`
	// console.log('token', cookies.getAll())
	if (token) {
		const { unique_name, userId } = jwtDecode(token);

		return {
			jwtToken: token,
			isLoggedIn: true,
			userName: unique_name,
			userId,
			loginUrl,
		testUrl,

		};
	}

	return {
		isLoggedIn: false,
		loginUrl,
		jwtToken: token,
		testUrl,
	};
}