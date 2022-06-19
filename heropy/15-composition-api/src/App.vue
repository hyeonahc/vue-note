<template>
  <NormalCode />
  <CompositionAPI />
  <hr />
  <h1>Example Normal</h1>
  <ExampleNormal />
  <hr />
  <h1>Example Composition</h1>
  <ExampleComp />
  <hr />
  <ParentBtn />
</template>

<script>
import NormalCode from './components/NormalCode.vue';
import CompositionAPI from './components/CompositionAPI.vue';
import ExampleNormal from './components/ExampleNormal.vue';
import ExampleComp from './components/ExampleComp.Composition.vue';
import ParentBtn from './components/ParentBtn.vue';

export default {
  name: 'App',
  components: {
    NormalCode,
    CompositionAPI,
    ExampleNormal,
    ExampleComp,
    ParentBtn,
  },
};
</script>

<style></style>
