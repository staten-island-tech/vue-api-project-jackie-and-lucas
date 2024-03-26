<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div class="logos">
      <img class="logo" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExam85MzN0bmVwYjltY25rYWUycGxnczZwMmUzMWN1M2h5MG80dW5xOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PgXcWhrL0gjQlAhHUY/giphy.gif" ></img>
      <img class="logo" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJjbW94dHgyNzNyd2xkeTF1N284OXdlMGFsa2RoMHYzbXR3a28xMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Oj8pUuT5FOpxHH9LIk/giphy.gif" ></img>
    </div>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/about">About</RouterLink><br>
        <RouterLink to="/api">api</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  position: absolute;
  top: 10%;
  left: 1%;
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  align-items: center;
}

.logos {
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  padding-bottom: 2vh; 
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .header {
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
