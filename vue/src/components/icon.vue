<template>
    <div>
<p>{{rate[0].year}}</p>
<p>{{rate[0].leadin_cause}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  rate: Object,
});
</script>

<style lang="scss" scoped>

</style>