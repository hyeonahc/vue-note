<!-- 1. 클래스 바인딩 (배열) -->
<template>
  <h1 v-bind:class="[activeClass, errorClass]" @click="activate">Hello</h1>
</template>

<script>
export default {
  data() {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
    };
  },
};
</script>

<style scoped>
.active {
  text-decoration: underline;
}
.text-danger {
  color: red;
}
</style>
