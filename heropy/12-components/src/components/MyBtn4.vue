<!-- 4. 컴포넌트 Slot -->
<!-- 슬롯(Slot)을 이용한 컨텐츠 제공 -->
<template>
  <div class="btn">
    <!-- 부모 컴포넌트에 텍스트가 없는 경우에만 slot의 텍스트가 출력된다 -->
    <!-- 우선순위: 부모 컴포넌트 텍스트 > slot 텍스트 -->
    <slot>Banana</slot>
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
