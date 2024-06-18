<script>
    import "../app.css";
    import { jwtDecode } from 'jwt-decode';
    import { Styles } from '@sveltestrap/sveltestrap';
    import { onMount } from 'svelte';
    import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Icon
  } from '@sveltestrap/sveltestrap';

 export let data

  let isOpen = false;
  let loggedIn = false;
  let userName = '';
  let userId = '';
  const loginUrl = data.loginUrl;
  console.log(data)
  
  if (data.isLoggedIn) {
    userName = data.userName;
    userId = data.userId;
    loggedIn = true;
  }

  function testThing() {
    // data.testCookie()
    // console.log(data)
  }
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  // onMount(decodeToken);
  </script>
  
  <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>
  <a href="{data.testUrl}">test button test me</a>
<Navbar color="light" light expand="md" container="md">
  <NavbarBrand href="/">
    <button on:click={testThing}>welcome</button>
      <Button outline=true color=primary href="/build">
        <Icon name="plus-circle-dotted" />
        Build
      </Button>

  </NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Nav navbar>
      <NavItem>
        <NavLink href="#components/">Explore</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#components/">My Stuff</NavLink>
      </NavItem>
      {#if loggedIn}
        <NavItem>
          <NavLink href="/profile/{userId}">{userName}</NavLink>
        </NavItem>
      
        {:else}
          <NavItem>
            <NavLink href="{loginUrl}">Sign In</NavLink>
          </NavItem>
      {/if}
      
    </Nav>
</Navbar>
<div class="container-fluid mt-2">
  <slot />
</div>

  <style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  </style>