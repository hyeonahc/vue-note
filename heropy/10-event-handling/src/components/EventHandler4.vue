<!-- 4. 여러 메서드를 연결해주고 싶은 경우 -->
<template>
  <!-- 전달해줄 인수가 없는 경우에도 여러 메서드를 하나의 이벤트 핸들러로 연결해줄 경우에는 소괄호를 붙여 함수를 호출한다  -->
  <button @click="handlerX(), handlerY()">Click Me 1</button>
  <button @click="handlerA('handlerA'), handlerB('handlerB')">
    Click Me 2
  </button>
</template>

<script>
export default {
  methods: {
    handlerX() {
      console.log('handlerX');
    },
    handlerY() {
      console.log('handlerY');
    },
    handlerA(msg) {
      console.log(msg);
    },
    handlerB(msg) {
      console.log(msg);
    },
  },
};
</script>

<style scoped></style>
