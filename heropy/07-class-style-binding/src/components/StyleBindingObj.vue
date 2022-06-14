<!-- 2. 스타일 바인딩 (객체) -->
<template>
  <h1 :style="{ color: color, fontSize: fontSize }" @click="changeStyle">
    Hello
  </h1>
</template>

<script>
export default {
  data() {
    return {
      color: 'orange',
      fontSize: '30px',
    };
  },
  methods: {
    changeStyle() {
      this.color = 'red';
      this.fontSize = '50px';
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
.text-danger {
  color: red;
}
</style>
