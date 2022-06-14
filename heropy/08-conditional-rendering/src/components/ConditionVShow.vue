<template>
  <button @click="handler">Click Me</button>
  <!-- v-show 디렉티브는 template 태그 안에서 사용할 수 없다 -->
  <div v-show="isShow">
    <h1>title</h1>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
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
