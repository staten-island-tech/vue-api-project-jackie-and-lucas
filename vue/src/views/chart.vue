<template>
    <div class="cards">
        <card v-for="something in item" :key = item :rate="something" />
    </div>
</template>

<script setup>
import card from "@/components/icon.vue"
import { ref, onMounted} from "vue";
import {item} from "@/components/getapi.vue"


onMounted(()=>{
    api();

});
export {item}
</script>

<style scoped>
.cards{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>