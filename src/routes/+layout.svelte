<script>
    import "../app.css";
    import { page } from '$app/stores';
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
  
  let code = $page.url.searchParams.get('code')
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

  function login() {
    window.location.href = data.loginUrl;
  }

  const testAuth = async () => {
    console.log('testing auth')
    console.log(data.testUrl)
    const something = await fetch(data.testUrl, {
              method: 'GET',
              credentials: 'include',
            })

            const res = await something.json()
            console.log(res)
  }

  const authme = async () => {
    console.log('autthing')
  //   if (code) {
  //     console.log('has code')

  //     const response = await fetch(`${import.meta.env.VITE_AUTH_URL}/discord-callback`, {
  //       method: 'POST',
  //       headers: {
  //   'Content-Type': 'text/plain', // Set content type as plain text
  // },
  // body: code
  //     });

      if (code) {
        const url = data.authUrl;
        // window.location.href = url + '?code=' + code;
        const someting = await fetch(url+ '?code=' + code)
        const dat = await someting.json()
        console.log(dat)
        // const codeValue = code; // Replace with your actual string value

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ code: codeValue })
        //   })
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        //   })
        //   .then(data => {
        //     console.log('Success:', data);
        //   })
        //   .catch(error => {
        //     console.error('Error:', error);
        //   });
      }
      else {

      }


    }
    // else {
    //   const reponse = await fetch(`${data.testUrl}`, {
    //     method: 'GET',
    //     credentials: 'include',
    //   })
    //   const dat = await response.json();
    //   console.log(dat)
    // }
  

  // onMount(authme);

  // onMount(decodeToken);


  </script>
  
  <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>
  <a href="{data.testUrl}">test button test me</a>
<Navbar color="light" light expand="md" container="md">
  <NavbarBrand href="/">
    <button on:click={testAuth}>welcome</button>
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