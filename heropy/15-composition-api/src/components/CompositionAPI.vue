<template>
  <!-- ref로 만든 count라는 데이터는 script 내부에서는 value로 접근해야하지만 template에서는 변수명 그대로 사용할 수 있다 -->
  <h1 @click="increase">{{ count }}</h1>
</template>

<script>
import { ref } from 'vue';

export default {
  // setup 메서드 추가
  setup() {
    // data
    // 등록된 데이터는 반응성이 없다
    // let count = 0;
    // 데이터에 반응성을 부여하기 위해 ref를 사용한다
    // 객체 데이터로 반환
    let count = ref(0);
    // function
    function increase() {
      // ref로 데이터를 등록해준 count는 객체 데이터다
      // 해당 데이터에 value라는 속성으로 접근한다
      count.value += 1;
    }
    // 등록한 data, function 리턴
    return {
      count,
      increase,
    };
  },
};
</script>

<style scoped></style>
