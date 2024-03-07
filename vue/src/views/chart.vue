<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted} from "vue";
async function api(){
 const api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 const data = await api.json();
}

api();

</script>

<style lang="scss" scoped>

</style>