<template>
  <ConditionIf />
  <hr />
  <ConditionIfElse />
  <hr />
  <ConditionIfElseIfElse />
  <hr />
  <ConditionVShow />
  <hr />
</template>

<script>
import ConditionIf from './components/ConditionIf.vue';
import ConditionIfElse from './components/ConditionIfElse.vue';
import ConditionIfElseIfElse from './components/ConditionIfElseIfElse.vue';
import ConditionVShow from './components/ConditionVShow.vue';

export default {
  name: 'App',
  components: {
    ConditionIf,
    ConditionIfElse,
    ConditionIfElseIfElse,
    ConditionVShow,
  },
};
</script>

<style></style>
