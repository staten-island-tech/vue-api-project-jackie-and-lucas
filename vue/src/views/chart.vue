<template>
    <div>
        <card v-for="something in item" :key = item :rate="something" />
    </div>
</template>

<script setup>
import card from "@/components/icon.vue"
import {item, api} from "@/components/getapi.vue"
import { onMounted } from "vue";
onMounted(()=>{
    api();

});
</script>

<style scoped>
.cards{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>