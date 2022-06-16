<!-- 4. 수식어 Lazy -->
<template>
  <h1>{{ msg }}</h1>
  <!-- @change: input 요소가 포커싱되지 않는 상황에 값이 업데이트된다 -->
  <!-- <input type="text" :value="msg" @change="msg = $event.target.value" /> -->
  <!-- lazy: input 요소가 포커싱되지 않는 상황에 값이 업데이트된다 (v-model의 수식어) -->
  <input type="text" v-model.lazy="msg" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

<style scoped></style>
