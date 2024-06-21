<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let selectedItem = {
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

    const typeValues = [
        { value: 0, label: 'Weapon' },
        { value: 1, label: 'Vitality' },
        { value: 2, label: 'Spirit' },
    ]

    const validationPatterns = {
        num: "{[0-9]}",
        weaponDamage: /^[0-9]{1,5}$/,
        spiritDamage: /^[0-9]{1,5}$/,
        bonusHealth: /^[0-9]{1,5}$/,
    }

    const submitItem = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/Store/AddItem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedItem)
    })
    const success = await response.ok
    if (success) {
        dispatch('itemSaved')
    }
}
    
</script>

<h1>item edit</h1>
<div class=mb-2>
    <label for='item-name'>Item Name</label>
    <input bind:value="{selectedItem.itemName}" class="form-control" id="item-name" />
</div>

<div class=mb-2>
    <label for='item-type'>Type</label>
    <select bind:value="{selectedItem.itemType}" class="form-select" id="item-type">
        {#each typeValues as type}
            <option value="{type.value}">{type.label}</option>
        {/each}
    </select>
</div>
<div class=mb-2>
    <label for='item-name'>Cost</label>
    <input bind:value="{selectedItem.cost}" class="form-control" id="item-cost" pattern="[0-9]" />
</div>
<div class="mb-2 form-check">
    <label for='item-name'>Disabled</label>
    <input type="checkbox" bind:checked="{selectedItem.disabled}" class="form-check-input" id="item-disabled" />
</div>
<div class="mb-2 form-check">
    <label for='item-name'>Active</label>
    <input type="checkbox" bind:checked="{selectedItem.active}" class="form-check-input" id="item-active" />
</div>
<div class=mb-2>
    <label for='item-name'>Weapon Damage</label>
    <input bind:value="{selectedItem.weaponDamage}" class="form-control" id="item-weapon-damage" />
</div>
<div class=mb-2>
    <label for='item-name'>Spirit Damage</label>
    <input bind:value="{selectedItem.spiritDamage}" class="form-control" id="item-spirit-damage" />
</div>
<div class=mb-2>
    <label for='item-name'>Bonus Health</label>
    <input bind:value="{selectedItem.bonusHealth}" class="form-control" id="item-bonus-health" />
</div>
<div class=mb-2>
    <label for='item-name'>Bullet Shield Health</label>
    <input bind:value="{selectedItem.bullShieldHealth}" class="form-control" id="item-bullet-shield" />
</div>
<div class=mb-2>
    <label for='item-name'>Ammo</label>
    <input bind:value="{selectedItem.ammo}" class="form-control" id="item-ammo" />
</div>
<div class=mb-2>
    <label for='item-name'>Bullet Resist</label>
    <input bind:value="{selectedItem.bulletResist}" class="form-control" id="item-bullet-resist" />
</div>
<div class=mb-2>
    <label for='item-name'>Fire Rate</label>
    <input bind:value="{selectedItem.fireRate}" class="form-control" id="item-fire-rate" />
</div>
<div>
    <button on:click={submitItem} class='btn btn-primary'>Save</button>
    <button class='btn btn-warning'>Delete</button>
</div>