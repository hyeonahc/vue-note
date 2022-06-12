<template>
  <ComputedComp />
  <hr />
  <ComputedCaching />
  <hr />
  <GetterSetter />
</template>

<script>
import ComputedComp from './components/ComputedComp.vue';
import ComputedCaching from './components/ComputedCaching.vue';
import GetterSetter from './components/GetterSetter.vue';

export default {
  name: 'App',
  components: {
    ComputedComp,
    ComputedCaching,
    GetterSetter,
  },
};
</script>

<style></style>
