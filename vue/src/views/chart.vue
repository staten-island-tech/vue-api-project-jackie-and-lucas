<template>
    <div>
        <p>`${item}`</p>
    </div>
</template>

<script setup>
import Pullapi from "@/components/icon.vue";
import { ref, onMounted} from "vue";
const item = ref("");
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
 console.log(data[100])
 item.value = data[0]
}

onMounted(()=>{
    api();
});

</script>

<style lang="scss" scoped>

</style>