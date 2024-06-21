import { jwtDecode } from "jwt-decode";

export async function load({ cookies}) {
	const token = cookies.get('jwtToken');
	const userId = cookies.get('userId');
	const username = cookies.get('username');
	const isLoggedIn = false;
	const loginUrl = import.meta.env.VITE_REDIRECT_URI
	const testUrl = `${import.meta.env.VITE_AUTH_URL}/TestMe`
	const authUrl = `${import.meta.env.VITE_AUTH_URL}/discord-callback`

	return {
		isLoggedIn: false,
		loginUrl,
		// jwtToken: token,
		token,
		testUrl,
		authUrl,
		userId,
		username
	};
}