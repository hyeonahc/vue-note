<!-- 4. 동적 전달인자  -->
<template>
  <h1 :[attr]="'active'" @[event]="add">{{ msg }}</h1>
  <!-- :[attr]="msg"를 사용하면 add 메서드가 실행될때 msg값이 바뀌므로 class도 바뀐다 -->
  <!-- '' 작은 따옴표로 묶어 클래스이름을 데이터가 아닌 문자열로 만들어준다 -->
  <!-- :class="active" @click="add" -->
</template>

<script>
export default {
  name: 'StringComp',
  data() {
    return {
      msg: 'active',
      attr: 'class',
      event: 'click',
    };
  },
  methods: {
    add() {
      this.msg += '!';
    },
  },
};
</script>

<style scoped>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>
