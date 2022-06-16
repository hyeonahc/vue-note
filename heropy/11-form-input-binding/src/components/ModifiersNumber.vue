<!-- 5. 수식어 number -->
<template>
  <h1>{{ msg }}</h1>
  <!-- input에서 받아온 msg는 string이다 -->
  <!-- <input type="text" v-model="msg" /> -->
  <!-- number: input에서 받아온 값이 자동으로 숫자로 바뀐다 -->
  <input type="text" v-model.number="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 123,
    };
  },
  watch: {
    msg() {
      console.log(typeof this.msg);
    },
  },
};
</script>

<style scoped></style>
