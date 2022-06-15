<!-- 3. 전달해줄 인수와 이벤트객체가 있는 경우 -->
<template>
  <button @click="handler('Hi', $event)">Click Me 1</button>
  <button @click="handler('Bye', $event)">Click Me 2</button>
</template>

<script>
export default {
  methods: {
    handler(msg, event) {
      console.log(msg);
      console.log(event);
    },
  },
};
</script>

<style scoped></style>
