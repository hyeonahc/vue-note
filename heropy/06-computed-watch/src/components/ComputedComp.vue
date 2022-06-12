<!-- 1. Computed 속성 -->
<template>
  <section v-if="hasFruits">
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
  // computed 옵션에 설정된 함수는 연산된 값이다
  // 연산된값을 사용할때는 hasFruits()가 아닌 hasFruits로 그 값을 가져온다
  computed: {
    hasFruits() {
      return this.fruits.length > 0;
    },
    reverseFruits() {
      return this.fruits.map(fruit => {
        return fruit.split('').reverse().join('');
      });
    },
  },
};
</script>

<style scoped></style>
