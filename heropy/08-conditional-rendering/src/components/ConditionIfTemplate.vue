<template>
  <button @click="handler">Click Me</button>
  <template v-if="isShow">
    <h1>title</h1>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </template>
</template>

<script>
export default {
  data() {
    return {
      isShow: 'true',
      count: 0,
    };
  },
  methods: {
    handler() {
      this.isShow = !this.isShow;
      this.count += 1;
    },
  },
};
</script>

<style scoped></style>
