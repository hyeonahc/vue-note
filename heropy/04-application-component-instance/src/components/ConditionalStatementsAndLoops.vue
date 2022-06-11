<!-- 2. 조건문과 반복문 -->
<template>
  <h1>Conditional statements and loops</h1>
  <h2 @click="increase">{{ count }}</h2>
  <!-- 조건문 -->
  <div v-if="count > 4">4보다 큽니다!</div>
  <ul>
    <!-- 반복문 -->
    <!-- 반복문으로 데이터를 출력할때는 고유한 key 값을 각각의 데이터마다 부여해준다  -->
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ConditionalStatementsAndLoops',
  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
  methods: {
    increase() {
      this.count += 1;
    },
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
