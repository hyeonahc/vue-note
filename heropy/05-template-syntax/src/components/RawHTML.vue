<!-- 2. 원시 HTML  -->
<template>
  <h1 @click="add">{{ msg }}</h1>
  <h1 v-html="msg" @click="add"></h1>
</template>

<script>
export default {
  name: 'RawHTML',
  data() {
    return {
      msg: '<div style="color: tomato;">Hey</div>',
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
