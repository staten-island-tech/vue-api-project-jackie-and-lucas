<template>
    <div>
        <p class="item"></p>
    </div>
</template>

<script setup>
import thing from "@/components/API.vue";
import { ref, onMounted} from "vue";
const k = ref(thing);
async function api(){
 let api = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
 let data = await api.json();
 console.log(data[100])
 item.value = data[0]
}
console.log(k);

onMounted(()=>{
    api();
});

</script>

<style lang="scss" scoped>

</style>