<script>
    export let data;

    import { onMount } from "svelte";
    import {
        TabContent,
        TabPane,
        Button,
        ListGroup,
        ListGroupItem,
        Form,
        FormGroup,
        Input,
        Badge,
        Icon,
    } from "@sveltestrap/sveltestrap";

    // import Sortable from 'sortablejs';
    import Sortable from "sortablejs";

    let items = [];
    let heroes = [];

    //generate random id for category
    let storedBuild = {
        hero: null,
        items: [],
        categories: [
            {
                id: 'cat-1',
                name: "",
                items: [],
            },
        ],
        buildName: "",
        buildId: null,
        description: "",
    };

    if (data.items.length > 0) {
        items = data.items;
    }

    if (data.heroes.length > 0) {
        heroes = data.heroes;
    }

    function addCategory() {
        storedBuild.categories.push({
            id: `cat-${storedBuild.categories.length + 1}`,
            name: "",
            items: [],
        });

        storedBuild.categories = storedBuild.categories;
        new Sortable(document.getElementById(category.id), {
                group: "shared",
                animation: 150,
                onAdd: () => {
                    console.log("moving");
                }
            });
    }

    async function saveBuild() {
        // fetch save build at api
        // but first gather all the shit

        let cats = document.getElementById('cat-list').childNodes
        const categories = []

        cats.forEach((cat) => {
            const catObj = {
                items: []
            }
            catObj.categoryName = cat.querySelector('input.cat-name').value
            const catItems = cat.querySelector('#item-list').childNodes
            catItems.forEach(catItem => {
                const itemName = catItem.innerHTML.trim()

                const o = items.find(i => i.itemName == itemName)
                if(o) {
                    catObj.items.push(o.itemId)
                }
                
            })
            // console.log(catObj.items)
            // catObj.items = [1]
            // console.log(catObj.items)
            categories.push(catObj)
        })


        const build = {
            buildName: storedBuild.buildName,
            heroId: storedBuild.hero.id,
            creatorName: "fart2",
            description: "farting",
            categories: categories
        }


        await fetch("/api/Build/Save", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(build)
        })
    }

    // functionz
    function selectHero(hero) {
        console.log("selecting");
        storedBuild.hero = hero;
    }

    function initiateCategories() {
        storedBuild.categories.forEach((category) => {
            new Sortable(document.getElementById(category.id).querySelector('#item-list'), {
                group: "shared",
                animation: 150,
                // onAdd: (event) => {
                    
                // }
            });

        });
    }

    onMount(async () => {
        const div1 = document.getElementById("div1");
        const div2 = document.getElementById("div2");
        new Sortable(div1, {
            group: {
                name: "shared",
                pull: "clone",
                put: false, // Do not allow items to be put into this list
            },
            animation: 150,
            sort: false, // To disable sorting: set sort to false
        });

        initiateCategories();
        // new Sortable(div2, {
        //     group: "shared",
        //     animation: 150,
        // });
    });
</script>

<div class="card border-0 rounded-0">
    <div class="card-body">
        <button on:click={saveBuild}>Save</button>
        <div class="row gx-4">
            <div class="col-6">
                <TabContent>
                    <TabPane tabId="hero" tab="Hero" active>
                        <div class="card">
                            <div class="card-body">
                                {#if storedBuild.hero}
                                    <h2>{storedBuild.hero.name}</h2>
                                {:else}
                                    <div class="row">
                                        <h2>Choose a hero</h2>
                                        <ListGroup>
                                            {#each heroes as hero}
                                                <ListGroupItem
                                                    tag="button"
                                                    action
                                                    on:click={() =>
                                                        selectHero(hero)}
                                                >
                                                    {hero.name}
                                                </ListGroupItem>
                                            {/each}
                                        </ListGroup>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="info" tab="Info">
                        <h2 class="text-content">Info</h2>
                        <Form>
                            <FormGroup
                                floating
                                label="Build Name"
                                bind:value={storedBuild.buildName}
                            >
                                <Input placeholder="Enter a value" />
                            </FormGroup>
                            <FormGroup
                                floating
                                label="Description"
                                bind:value={storedBuild.description}
                            >
                                <Input placeholder="Enter a value" />
                            </FormGroup>
                        </Form>
                    </TabPane>
                </TabContent>
            </div>
            <div class="col-6 py-2">
                <div class="row">
                    <ul id='cat-list' class="list-group list-group-flush">
                        {#each storedBuild.categories as category, i}
                            <li id="{category.id}" class="list-group-item">
                                <div class="pb-4 rounded shadow my-2">
                                    <div>
                                        <div
                                            class="d-flex justify-content-between"
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Category"
                                                bind:value={category.name}
                                                class="rounded-0 border-0 border-bottom cat-name"
                                            />
                                            <div>
                                                <Button
                                                    color="danger"
                                                    class="rounded-0 border-0"
                                                    >X</Button
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div id="item-list" class="px-2 py-3">
                                        
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                    <div class="mt-2">
                        <Button color="primary" on:click={addCategory}>
                            <Icon name="plus-circle-dotted" class="me-1" />
                            Add Category
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <TabContent>
                    <TabPane tabId="weapon" tab="Weapon" active>
                        <div class="card">
                            <div class="card-body">
                                <Form>
                                    {#each items as item}
                                        <Input
                                            type="checkbox"
                                            label={item.itemName}
                                        />
                                    {/each}
                                </Form>
                                <div id="div1" class="bg-primary d-flex">
                                    {#each items as item}
                                        <div id="item-{item.itemId}" class="card mx-1" style="width: 5rem; height: 5rem;">
                                            {item.itemName}
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="vitality" tab="Vitality"></TabPane>
                    <TabPane tabId="spirit" tab="Spirit"></TabPane>
                </TabContent>
            </div>
        </div>
    </div>
</div>
