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

for (let i = 0; i < 1000; i++) {  
  item.ref = data[i];
  console.log(item.ref.year)
  }
}

onMounted(()=>{
  api();
});
</script>

<style lang="scss" scoped>

</style>