<!-- 6. 수식어 trim -->
<template>
  <h1>{{ msg }}</h1>
  <!-- input에 입력한 문자 앞뒤에 공백이 있으면 공백을 포함한 데이터가 출력된다  -->
  <!-- <input type="text" v-model="msg" /> -->
  <!-- trim: 입력한 데이터 앞뒤에 있는 공백을 제거해준다  -->
  <input type="text" v-model.trim="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
  watch: {
    msg() {
      console.log(this.msg);
    },
  },
};
</script>

<style scoped></style>
