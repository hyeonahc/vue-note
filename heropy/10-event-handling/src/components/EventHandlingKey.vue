<template>
  <input type="text" @keydown="handlerA" />
  <!-- Vue에서는 key를 넘겨줄 수 있다 -->
  <input type="text" @keydown.a="handlerB" />
  <!-- 여러 key를 넘길수도 있다 -->
  <!-- ctrl a를 동시에 입력해야 handlerC가 실행된다 -->
  <input type="text" @keydown.ctrl.a="handlerC" />
</template>

<script>
export default {
  methods: {
    // 자바스크립트에서는 event.key로 사용자가 입력받은 값에 접근할 수 있었다
    handlerA(event) {
      console.log(event.key);
      if (event.key === 'a') {
        console.log('click a');
      }
    },
    handlerB() {
      console.log('click a');
    },
    handlerC() {
      console.log('click ctrl and a');
    },
  },
};
</script>

<style scoped></style>
