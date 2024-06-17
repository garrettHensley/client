export async function load({ fetch }) {

    const api = import.meta.env.VITE_API_URL

    const items = await (async function(){

        try {
            const res = await fetch(`${api}/Store/GetItems`)
            return await res.json()
        } catch (e) {
            console.log(e)
        }
        return []
    })()
    const heroes = await (async function(){
        try {
            const res = await fetch(`${api}/Heroes/GetAll`)
            return await res.json()
        } catch (e) {
            console.log(e)
        }
        return []
    })()



    return {
        items,
        heroes
    }
}