<template>
  <StringComp />
  <hr />
  <RawHTML />
  <hr />
  <PropertyComp />
  <hr />
  <DynamicParameter />
</template>

<script>
import StringComp from './components/StringComp.vue';
import RawHTML from './components/RawHTML.vue';
import PropertyComp from './components/PropertyComp.vue';
import DynamicParameter from './components/DynamicParameter.vue';

export default {
  name: 'App',
  components: {
    StringComp,
    RawHTML,
    PropertyComp,
    DynamicParameter,
  },
};
</script>

<style></style>
