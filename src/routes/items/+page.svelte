<script>
    import { onMount } from "svelte";
    import ItemEdit from '../../components/ItemEdit.svelte'


let selectedItem

let number;

let items = []

const testItem = () => {
    console.log(selectedItem)
}

const itemColors = {
    0: 'warning',
    1: 'success',
    2: 'primary',
}

const itemTemplate = {
        itemId: 0,
        itemName: '',
        weaponDamage: null,
        spiritDamage: null,
        bonusHealth: null,
        bullShieldHealth: null,
        ammo: null,
        active: false,
        itemType: 0,
        cost: 0,
        disabled: false,
        bulletResist: null,
        fireRate: null
    }

const getColor = (type) => {
    return itemColors[type]
}

async function getItems() {
		const response = await fetch('/items');
        items = await response.json();
        selectedItem = itemTemplate
	}

async function getItem(itemId) {
    const response = await fetch(`/item?itemId=${itemId}`);
    selectedItem = await response.json();
    console.log(selectedItem)
}



onMount(async () => {
    await getItems()
})

</script>


<div class='row'>
    <button on:click={getItems}>get the dice</button>
    <button on:click={testItem}>fuck</button>
    <div class=col-6>
        <h3>Existing</h3>
        <div>
            <div class='list-group'>
                {#each items as item}
                    <button on:click="{getItem(item.itemId)}" type="button" class="list-group-item list-group-item-action text-bg-{getColor(item.itemType)}" aria-current="true">
                        {item.itemName}
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <div class=col-6>
        <ItemEdit selectedItem='{selectedItem}' on:itemSaved={getItems} />
    </div>
</div>