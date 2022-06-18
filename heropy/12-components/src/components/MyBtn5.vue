<!-- 4. 컴포넌트 Slot -->
<!-- 슬롯(Slot)을 이용한 컨텐츠 제공 -->
<template>
  <div class="btn">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  display: inline-block;
  margin: 4px;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: gray;
  color: white;
  cursor: pointer;
}
</style>
