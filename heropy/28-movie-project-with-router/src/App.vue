<template>
  <!-- <TheHeader /> -->
  <!-- Home.vue 컴포넌트에서만 TheHeader.vue 컴포넌트 보여주는 작업 -->
  <RouterView name="TheHeader" />
  <!-- createRouter로 생성한 라우터가 보이는 영역 등록 -->
  <RouterView />
</template>

<script>
// import TheHeader from '~/components/TheHeader.vue'

export default {
  // components: {
  //   TheHeader
  // }
}
</script>

<style>
#app {
  height: 3000px
}
</style>
