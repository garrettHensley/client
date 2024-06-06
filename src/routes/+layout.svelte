<script>
    import "../app.css";
    import { Styles } from '@sveltestrap/sveltestrap';
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

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
  </script>
  
  <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>
  
<Navbar color="light" light expand="md" container="md">
  <NavbarBrand href="/">Buildlock</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Nav navbar>
      <NavItem>
        <NavLink href="#components/">Explore</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#components/">My Stuff</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/sveltestrap/sveltestrap">GitHub</NavLink>
      </NavItem>
      <NavItem>
        <Button outline=true color=primary href="/build/">
          <Icon name="plus-circle-dotted" />
          Build
        </Button>
      </NavItem>
    </Nav>
</Navbar>
<div class="container-fluid mt-2">
  <slot />
</div>

fuck
  <style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  </style>