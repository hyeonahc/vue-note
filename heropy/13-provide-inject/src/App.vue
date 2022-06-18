<template>
  <button @click="msg = 'Bye World'">Click</button>
  <h1>App: {{ msg }}</h1>
  <ParentComp :msg="msg" />
</template>

<script>
import ParentComp from './components/ParentComp.vue';
// 계산된 데이터
import { computed } from 'vue';

export default {
  name: 'App',
  components: {
    ParentComp,
  },
  data() {
    return {
      msg: 'Hello World',
    };
  },
  provide() {
    return {
      // provide로 만든 데이터는 반응성이 아니다
      // 즉 inject로 msg2 데이터를 삽입한 컴포넌트에서는 해당 데이터가 변경되어도 반영되지 않는다
      // provide는 단순히 데이터를 전달할때만 사용한다
      msg2: this.msg,
      //provide에 있는 데이터를 반응성으로 만들고 싶으면 computed라는 메서드를 vue에서 import해 사용해야한다
      msg3: computed(() => this.msg),
    };
  },
};
</script>

<style></style>
