<!-- 2. 이벤트 핸들러에 연결된 메서드에 전달할 인수가 있는 경우 -->
<template>
  <button @click="handler('Hi')">Click Me 1</button>
  <button @click="handler('Bye')">Click Me 2</button>
</template>

<script>
export default {
  methods: {
    handler(msg) {
      console.log(msg);
    },
  },
};
</script>

<style scoped></style>
