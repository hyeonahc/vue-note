<template>
  <ul>
    <li v-for="(fruit, index) in fruits" v-bind:key="fruit">
      {{ fruit }}-{{ index }}
    </li>
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
