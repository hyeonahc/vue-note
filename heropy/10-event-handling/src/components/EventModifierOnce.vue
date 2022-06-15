<!-- 2) @eventHandler.once: 연결된 메서드를 한번만 실행해준다 -->
<template>
  <a href="https://naver.com" target="_blank" @click.once="handler">NAVER</a>
</template>

<script>
export default {
  methods: {
    handler() {
      console.log('NAVER');
    },
  },
};
</script>
