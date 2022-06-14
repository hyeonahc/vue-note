<template>
  <ul>
    <li v-for="fruit in newFruits" v-bind:key="fruit.id">
      {{ fruit.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry'],
    };
  },
  computed: {
    // newFruits의 결과값은 [{id: 0, name: 'Apple'}...]
    // 총 3개의 객체데이터를 가지고 있는 배열이 리턴된다
    newFruits() {
      return this.fruits.map((fruit, index) => {
        return {
          id: index,
          name: fruit,
        };
      });
    },
  },
};
</script>

<style scoped></style>
