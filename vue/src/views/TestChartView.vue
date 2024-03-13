<template>
  <div>
      <p></p>
  </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
const item = ref("");
async function api(){
let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
let data = await api.json();
item.ref = data[100];
console.log(item)

}

onMounted(()=>{
  api();
});

</script>

<style lang="scss" scoped>

</style>