<template>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Overall Death Rate</RouterLink>
        <RouterLink to="/2007">2007</RouterLink>
        <RouterLink to="/2008">2008</RouterLink>
        <RouterLink to="/2009">2009</RouterLink>
        <RouterLink to="/2010">2010</RouterLink>
        <RouterLink to="/2011">2011</RouterLink>
        <RouterLink to="/2012">2012</RouterLink>
        <RouterLink to="/2013">2013</RouterLink>
        <RouterLink to="/2014">2014</RouterLink>
      </nav>
    </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.wrapper{
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  position: absolute;
  bottom:15%;
  width: 100%;
  place-items: center;
  right: 50%;
}
nav {
  position: absolute;
  width: 100%;
  font-size: 3vh;
  text-align: center;
  place-items: center;
  left: 50%;
}

nav a.router-link-exact-active {
  color: rgb(136, 0, 0)
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color:black
}

nav a:first-of-type {
  border: 0;
}

</style>
