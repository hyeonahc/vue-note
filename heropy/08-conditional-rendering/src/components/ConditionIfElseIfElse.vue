<!-- 3. v-if v-else-if v-else -->
<template>
  <button @click="handler">Click Me</button>
  <p>Count: {{ count }}</p>
  <h1 v-if="isShow">Hello</h1>
  <h1 v-else-if="count > 3">Count > 3</h1>
  <h1 v-else>Bye</h1>
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
