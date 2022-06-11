<template>
  <DeclarativeRendering />
  <ConditionalStatementsAndLoops />
  <FruitsCom />
</template>

<script>
import DeclarativeRendering from './components/DeclarativeRendering.vue';
import ConditionalStatementsAndLoops from './components/ConditionalStatementsAndLoops.vue';
import FruitsCom from './components/FruitsCom.vue';

export default {
  name: 'App',
  components: {
    DeclarativeRendering,
    ConditionalStatementsAndLoops,
    FruitsCom,
  },
};
</script>

<style>
h1 {
  font-size: 30px;
}
h2 {
  font-size: 25px;
  color: royalblue;
}
</style>
