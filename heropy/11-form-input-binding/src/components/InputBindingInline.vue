<!-- 2. 양방향 데이터 바인딩 (인라인) -->
<template>
  <h1>{{ msg }}</h1>
  <input type="text" :value="msg" @input="msg = $event.target.value" />
  <h1>{{ hangul }}</h1>
  <input type="text" :value="hangul" @input="hangul = $event.target.value" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      hangul: '헬로우 월드',
    };
  },
  methods: {
    // hanlder(event) {
    //   console.log(event.target.value);
    //   this.msg = event.target.value;
    // },
  },
};
</script>

<style scoped></style>
