<!-- 3. 속성  -->
<template>
  <!-- HTML 속성(id, class, type, href 등)에 데이터를 사용하고 싶다면 이중중괄호로 데이터를 바인딩하는 것이 아닌 v-bind 디렉티브를 사용해야한다 -->
  <!-- msg라는 데이터를 클래스의 이름과 HTML 컨텐츠로 사용하였다 -->
  <h1 v-bind:class="msg">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'PropertyComp',
  data() {
    return {
      msg: 'active',
    };
  },
  methods: {
    add() {
      this.msg += '!';
    },
  },
};
</script>

<style scoped>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>
