<template>
  <h1>Hello World</h1>
  <!-- 최상위 요소가 2개 이상일때 non prop 속성을 받아오지 못한다 -->
  <!-- v-bind="$attrs" 속성을 요소에 붙이면 최상위 요소가 아닌 요소에도 non prop 속성을 받아 올 수 있다 -->
  <p
    v-bind="$attrs">
    {{ message }}
  </p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped lang="scss">
.active {
  color: red;
}
[good="123"] {
  text-decoration: underline;
}
</style>
