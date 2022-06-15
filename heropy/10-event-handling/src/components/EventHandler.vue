<!-- 1. 이벤트 핸들러에 메서드 연결 -->
<template>
  <!-- Vue에서 함수를 실행할때 전달해줄 인수가 없다면 함수 이름만으로 함수를 호출할 수 있다 -->
  <button @click="handler">Click Me</button>
</template>

<script>
export default {
  methods: {
    // 인수 없이 함수만 호출해줄때 첫번째 파라미터로 event 객체를 가진다
    // 이벤트 객체를 출력하면 사용자가 발생시킨 이벤트에 대한 정보가 나온다
    handler(event) {
      console.log(event);
      // 이벤트가 발생한 요소
      console.log(event.target);
      // 이벤트가 발생한 요소 안에 있는 텍스트
      console.log(event.target.textContent);
    },
  },
};
</script>

<style scoped></style>
