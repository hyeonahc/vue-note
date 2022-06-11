<!-- 3. 반복문 (외부로 컴포넌트 보내기)  -->
<!-- 부모 컴포넌트 -->
<template>
  <h1>Fruits</h1>
  <ul>
    <FruitCom v-for="fruit in fruits" :key="fruit" :name="fruit">{{
      fruit
    }}</FruitCom>
  </ul>
</template>

<script>
import FruitCom from './FruitCom.vue';

export default {
  name: 'FruitsCom',
  components: {
    FruitCom,
  },
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    font-size: 20px;
  }
}
</style>
