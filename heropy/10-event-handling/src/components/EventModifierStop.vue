<!-- 3) @eventHandler.stop: event.stopPropagation()처럼 부모 요소에 이벤트가 전파되는 것을 방지해준다 -->
<template>
  <div class="parent" @click="parent">
    <div class="child" @click.stop="child"></div>
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
