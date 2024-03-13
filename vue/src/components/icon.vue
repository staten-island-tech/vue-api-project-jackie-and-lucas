<template>
    <div>
<p>{{rate.year}}</p>
<p>{{rate.leading_cause}}</p>
<p>{{rate.sex}}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  rate: Object,
});
</script>

<style lang="scss" scoped>

</style>