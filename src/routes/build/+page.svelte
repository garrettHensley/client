<script>
    export let data;

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

    let items = [];
    let heroes = [];

    const build = {
        hero: null,
        items: [
        ],
        categories: [
            {
                name: "",
                items: [],
            }
        ],
        buildName: "",
        buildId: null,
        description: "",
    };

    if (data.items.length > 0) {
        console.log(data.items);
        items = data.items;
    }

    if (data.heroes.length > 0) {
        console.log(data.heroes);
        heroes = data.heroes;
    }

    // functionz
    function selectHero(hero) {
        console.log("selecting");
        build.hero = hero;
    }
</script>

<div class="card border-0 rounded-0">
    <div class="card-body">
        <div class="row gx-4">
            <div class="col-6">
                <TabContent>
                    <TabPane tabId="hero" tab="Hero" active>
                        <div class="card">
                            <div class="card-body">
                                {#if build.hero}
                                    <h2>{build.hero.name}</h2>
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
                                bind:value={build.buildName}
                            >
                                <Input placeholder="Enter a value" />
                            </FormGroup>
                            <FormGroup
                                floating
                                label="Description"
                                bind:value={build.description}
                            >
                                <Input placeholder="Enter a value" />
                            </FormGroup>
                        </Form>
                    </TabPane>
                </TabContent>
            </div>
            <div class="col-6 py-2">
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
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="vitality" tab="Vitality" active></TabPane>
                    <TabPane tabId="spirit" tab="Spirit" active></TabPane>
                </TabContent>
                <div class="row">
                    <ul class="list-group">
                        {#each build.categories as category}
                            <li class="list-group-item">
                                <div class="pb-4 rounded shadow my-2">
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <Input type="text" placeholder="Category" bind:value={category.name} />
                                            <div>
                                                <Button color="danger">X</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-2 py-3">
                                        <em>
                                            Drag items here to add them to the category
                                        </em>
                                    </div>
                                </div>
                            </li>
                        {/each}
                    </ul>
                    <div class='mt-2'>
                        <Button color="primary">
                            <Icon name="plus-circle-dotted" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
