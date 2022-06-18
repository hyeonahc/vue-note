<template>
  <h1>Hello {{ name }}</h1>
  <h1 ref="bye">Bye {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
    };
  },
};
</script>

<style scoped></style>
