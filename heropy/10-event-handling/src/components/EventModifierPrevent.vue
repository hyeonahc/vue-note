<!-- 1) @eventHandler.prevent: event.preventDefault()처럼 이벤트의 기본동작을 방지해준다 -->
<template>
  <a href="https://naver.com" target="_blank" @click.prevent="handler">NAVER</a>
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
