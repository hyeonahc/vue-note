<template>
  <ul>
    <!-- fruit in newFruits -->
    <!-- newFruits은 [{}, {}, {}] 형태로 되어 있고 fruit은 배열 안에 잇는 각각의 객체 -->
    <!-- fruit은 객체이므로 구조분해할당으로 데이터에 접근이 가능하다 -->
    <!-- <li v-for="fruit in newFruits" v-bind:key="fruit.id"> -->
    <!-- fruit에 id와 name을 구조분해할당으로 추출 -->
    <li v-for="{ id, name } in newFruits" v-bind:key="id">
      {{ name }}-{{ id }}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid';

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
      return this.fruits.map(fruit => ({
        // shortid.generate()로 랜덤한 아이디를 생성
        id: shortid.generate(),
        name: fruit,
      }));
    },
  },
};
</script>

<style scoped></style>
