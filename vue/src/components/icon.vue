<template>
    <div>
<p>${rate.year}</p>
<p>${rate.leadin_cause}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  rate: Object,
});
</script>

<style lang="scss" scoped>

</style>