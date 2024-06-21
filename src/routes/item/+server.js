export async function GET({ fetch, url }) {
	const api = import.meta.env.VITE_API_URL

    const id = url.searchParams.get('itemId')
	const i = await fetch(`${api}/Store/GetItem?itemId=${id}`);
	const item = await i.json();

	return new Response(JSON.stringify(item), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}