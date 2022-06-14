<template>
  <ul>
    <li v-for="fruit in fruits" v-bind:key="fruit">{{ fruit }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
};
</script>

<style scoped></style>
