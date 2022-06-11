<!-- 3. 반복문 (외부로 컴포넌트 보내기)  -->
<!-- 자식 컴포넌트 -->
<template>
  <li>{{ name }}</li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>
