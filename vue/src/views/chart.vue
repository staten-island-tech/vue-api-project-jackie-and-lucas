<template>
    <div>
        <card v-for="something in item" :key = item :rate="something" />
    </div>
</template>

<script setup>
import card from "@/components/icon.vue"
import { ref, onMounted} from "vue";
const item = ref("");
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
 console.log(data[0])
 item.value = data  ;
 console.log(item.value)
}


onMounted(()=>{
    api();

});

</script>

<style lang="scss" scoped>

</style>