<!-- 2. 컴포넌트 상속 -->
<template>
  <!-- 상위 컴포넌트인 App.vue에서 class로 maple을 전달받았다 -->
  <!-- class는 btn, maple 두가지를 가진다 -->
  <!-- 즉 컴포넌트의 속성이 상속되었다 -->
  <!-- 이때 클래스는 컴포넌트의 최상위 요소(루트 요소)에게만 전달된다  -->
  <div class="btn">
    <slot></slot>
  </div>
  <!-- 한개 이상의 최상위 요소가 있어 부모 컴포넌트에 있는 속성을 받을 수 없는 구조일때 해결방법 -->
  <!-- 부모 컴포넌트의 속성을 직접 연결시켜주는 방법 -->
  <!-- 부모 컴포넌트의 모든 속성 중 원하는 속성만 개별적으로 부여 -->
  <p :class="$attrs.class" :style="$attrs.style">I love fruits</p>
  <!-- 부모 컴포넌트의 모든 속성을 상속 -->
  <p v-bind="$attrs">I love fruits</p>
</template>

<script>
export default {
  // 부모 컴포넌트의 속성이 상속되지 않는다
  inheritAttrs: false,
  created() {
    console.log(this.$attrs);
    // Proxy > Target > 부모 컴포넌트의 속성값
  },
};
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
