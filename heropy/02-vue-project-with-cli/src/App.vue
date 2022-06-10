<!-- vue 프로젝트는 template, script, style로 나눠진다 -->
<!-- 1. template: HTML code -->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- HelloWorld라는 컴포넌트를 script에서 받아와 출력 -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<!-- 2. script: JavaScript code -->
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<!-- 3. style: CSS code -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
