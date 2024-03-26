<script setup>
</script>

<template>
  <main>
    <img class="image" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJjbW94dHgyNzNyd2xkeTF1N284OXdlMGFsa2RoMHYzbXR3a28xMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Oj8pUuT5FOpxHH9LIk/giphy.gif" ></img>
    <h3 class="text">
      Here is some NYC data on the death rates for certain situations. Please click the different years on the left side to browse the charts.
    </h3>
  </main>
</template>

<style scoped>
main {
  min-height: 20vh;
  min-width: 100vh;
  align-items: center;
}
.image{
  object-fit: contain;
}
.text{
  position: absolute;
  left: 60%;
  top: 45%;
  width: 30vh;
}
</style>
