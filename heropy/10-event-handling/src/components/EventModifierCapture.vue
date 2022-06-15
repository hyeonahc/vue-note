<!-- 4) @eventHandler.capture: 이벤트를 특정 상위요소에서 하위요소로 전파시켜준다 -->
<template>
  <div class="parent" @click.capture="parent">
    <div class="child" @click="child"></div>
  </div>
</template>

<script>
export default {
  methods: {
    parent() {
      console.log('Parent');
    },
    child() {
      console.log('Child');
    },
  },
};
</script>

<style scoped>
.parent {
  width: 200px;
  height: 100px;
  background-color: royalblue;
  margin: 10px;
  padding: 10px;
}
.child {
  width: 100px;
  height: 100px;
  background-color: orange;
}
</style>
