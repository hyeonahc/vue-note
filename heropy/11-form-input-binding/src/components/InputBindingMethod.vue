<!-- 1. 양방향 데이터 바인딩 (메서드 사용) -->
<template>
  <h1>{{ msg }}</h1>
  <input type="text" :value="msg" @input="hanlder" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
  methods: {
    hanlder(event) {
      console.log(event.target.value);
      this.msg = event.target.value;
    },
  },
};
</script>

<style scoped></style>
