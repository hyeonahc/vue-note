<!-- 6) @eventHandler.passive -->
<template>
  <div class="parent" @wheel.passive="parent">
    <div class="child"></div>
  </div>
</template>

<script>
export default {
  methods: {
    parent(event) {
      for (let i = 0; i < 10000; i += 1) {
        console.log(event);
      }
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
  overflow: auto;
}
.child {
  width: 100px;
  height: 20000px;
  background-color: orange;
}
</style>
