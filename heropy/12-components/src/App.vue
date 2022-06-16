<template>
  <MyBtn>Apple</MyBtn>
  <!-- props로 color="royalblue"를 전달했다 -->
  <MyBtn color="royalblue">Apple</MyBtn>
  <MyBtn color="#000">Apple</MyBtn>
  <!-- 데이터를 전달해줄때는 v-bind: 또는 :를 key 앞에 써준다 -->
  <MyBtn :color="color">Apple</MyBtn>
  <MyBtn large>Apple</MyBtn>
  <!-- slot태그로 처리할 수 있다 -->
  <!-- <MyBtn text="Banana" /> -->
  <MyBtn>Banana</MyBtn>
</template>

<script>
import MyBtn from './components/MyBtn.vue';

export default {
  name: 'App',
  components: {
    MyBtn,
  },
  data() {
    return {
      color: '#000',
    };
  },
};
</script>

<style></style>
