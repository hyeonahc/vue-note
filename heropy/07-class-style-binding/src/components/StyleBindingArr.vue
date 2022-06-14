<!-- 2. 스타일 바인딩 (배열) -->
<!-- 여러개의 객체를 스타일에 바인딩하고 싶을때는 배열 사용 -->
<template>
  <h1 :style="[fontStyle, backgroundStyle]" @click="changeStyle">Hello</h1>
</template>

<script>
export default {
  data() {
    return {
      fontStyle: {
        color: 'orange',
        fontSize: '30px',
      },
      backgroundStyle: {
        backgroundColor: 'black',
      },
    };
  },
  methods: {
    changeStyle() {
      this.fontStyle.color = 'red';
      this.fontStyle.fontSize = '50px';
    },
  },
};
</script>

<style scoped></style>
