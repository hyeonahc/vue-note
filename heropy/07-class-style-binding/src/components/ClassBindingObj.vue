<!-- 1. 클래스 바인딩 (객체) -->
<template>
  <h1 v-bind:class="{ active: isActive }" @click="activate">Hello</h1>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activate() {
      this.isActive = true;
    },
  },
};
</script>

<style scoped>
.active {
  text-decoration: underline;
  color: royalblue;
}
</style>
