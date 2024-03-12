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
item.ref = data.value;
return item
}

onMounted(()=>{
  api();
  console.log(item)
});

</script>

<style lang="scss" scoped>

</style>