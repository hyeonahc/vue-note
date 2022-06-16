<!-- 3. 양방향 데이터 바인딩 (v-model) -->
<template>
  <h1>{{ msg }}</h1>
  <input type="text" v-model="msg" />
  <!-- v-model로 입력하면 한글은 한박자씩 늦게 출력된다 -->
  <!-- 한글을 양방향 데이터로 연결할때는 실시간으로 데이터값이 변경될 수 있도록 inline 방식을 사용 -->
  <h1>{{ hangul }}</h1>
  <input type="text" v-model="hangul" />
  <h1>{{ checked }}</h1>
  <input type="checkbox" v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      hangul: '헬로우 월드',
      checked: false,
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
