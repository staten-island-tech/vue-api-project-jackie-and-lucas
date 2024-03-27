<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="header">
    <div class="logos">
    </div>
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/year2007">2007</RouterLink><br>
        <RouterLink to="/year2008">2008</RouterLink><br>
        <RouterLink to="/year2009">2009</RouterLink><br>
        <RouterLink to="/year2010">2010</RouterLink><br>
        <RouterLink to="/year2011">2011</RouterLink><br>
        <RouterLink to="/year2012">2012</RouterLink><br>
        <RouterLink to="/year2013">2013</RouterLink><br>
        <RouterLink to="/year2014">2014</RouterLink><br>
      </nav>
  </header>

  <RouterView />
</template>

<style>
.header {
  position: absolute;
  left: 23%;
  top: 50px;
  display: flex;
  line-height: 1.5;
  max-height: 100vh;
  align-items: center;
  width: 100%;
}

.logos {
  display: flex;
  flex-direction: row;
}

.logo {
  display: block;
  padding-bottom: 1vh; 
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  position: fixed;
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
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2rem;
    font-family:cursive;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
