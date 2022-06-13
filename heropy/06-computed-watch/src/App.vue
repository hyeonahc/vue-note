<template>
  <ComputedComp />
  <hr />
  <ComputedCaching />
  <hr />
  <GetterSetter />
  <hr />
  <WatchComp />
</template>

<script>
import ComputedComp from './components/ComputedComp.vue';
import ComputedCaching from './components/ComputedCaching.vue';
import GetterSetter from './components/GetterSetter.vue';
import WatchComp from './components/WatchComp.vue';

export default {
  name: 'App',
  components: {
    ComputedComp,
    ComputedCaching,
    GetterSetter,
    WatchComp,
  },
};
</script>

<style></style>
