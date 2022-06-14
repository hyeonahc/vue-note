<template>
  <ListRendering />
  <hr />
  <ListRenderingIndex />
  <hr />
  <ListRenderingComputed />
  <hr />
  <ListRenderingComputedShortIO />
</template>

<script>
import ListRendering from './components/ListRendering.vue';
import ListRenderingIndex from './components/ListRenderingIndex.vue';
import ListRenderingComputed from './components/ListRenderingComputed.vue';
import ListRenderingComputedShortIO from './components/ListRenderingComputedShortIO.vue';

export default {
  name: 'App',
  components: {
    ListRendering,
    ListRenderingIndex,
    ListRenderingComputed,
    ListRenderingComputedShortIO,
  },
};
</script>

<style>
li {
  font-size: 50px;
}
</style>
