export async function load({ fetch }) {
    const items = await (async function(){
        try {
            const res = await fetch('https://buildlockapi.azurewebsites.net/api/Store/GetItems')
            return await res.json()
        } catch (e) {
            console.log(e)
        }
        return []
    })()
    const heroes = await (async function(){
        try {
            const res = await fetch('https://buildlockapi.azurewebsites.net/api/Heroes/GetAll')
            return await res.json()
        } catch (e) {
            console.log(e)
        }
        return []
    })()

    // console.log(import.meta.env.VITE_SOME_KEY)


    //const res = await fetch('https://localhost:7108/api/Heroes/GetAll')
    //const heroes = await res.json()

    return {
        items,
        heroes
    }
}