<template>
  <button @click="handler">Click Me</button>
  <h1 v-if="isShow">Hello</h1>
</template>

<script>
export default {
  data() {
    return {
      isShow: 'true',
    };
  },
  methods: {
    handler() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped></style>
