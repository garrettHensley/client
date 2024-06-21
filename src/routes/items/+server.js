import { json } from '@sveltejs/kit';

export async function GET({ fetch }) {
	const api = import.meta.env.VITE_API_URL

	const i = await fetch(`${api}/Store/GetItems`);
	const items = await i.json();

	return new Response(JSON.stringify(items), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}