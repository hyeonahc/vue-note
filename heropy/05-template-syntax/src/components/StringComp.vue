<!-- 1. 문자열  -->
<template>
  <!-- v-once: 데이터를 초기에 한번만 렌더링해주는 디렉티브 (데이터가 업데이트되어도 변하지 않는다) -->
  <h1 v-once @click="add">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'StringComp',
  data() {
    return {
      msg: 'Hello world',
    };
  },
  methods: {
    add() {
      this.msg += '!';
    },
  },
};
</script>

<style scoped></style>
