<!-- 5) @eventHandler.self: 요소가 화면에 노출된 부분에서만 이벤트가 발생한다 (자식 요소로 가려져 있는 부분에서는 이벤트가 발생하지 않는다) -->
<template>
  <div class="parent" @click.self="parent">
    <div class="child" @click="child"></div>
  </div>

  <div class="parent" @click="handler">
    <div class="child"></div>
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
    handler(event) {
      console.log(event.target); // 이벤트가 발생한 요소
      console.log(event.currentTarget); // 이벤트가 연결된 요소
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
