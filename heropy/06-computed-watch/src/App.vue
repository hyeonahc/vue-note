<template>
  <ComputedComp />
  <hr />
  <ComputedCaching />
</template>

<script>
import ComputedComp from './components/ComputedComp.vue';
import ComputedCaching from './components/ComputedCaching.vue';

export default {
  name: 'App',
  components: {
    ComputedComp,
    ComputedCaching,
  },
};
</script>

<style></style>
