import { jwtDecode } from "jwt-decode";

export function load({ cookies}) {
	const token = cookies.get('jwtToken');
	const isLoggedIn = false;

	if (token) {
		const { unique_name, userId } = jwtDecode(token);

		return {
			jwtToken: token,
			isLoggedIn: true,
			userName: unique_name,
			userId
		};
	}

	return {
		isLoggedIn: false
	};
}