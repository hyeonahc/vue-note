<template>
  <TheHeader />
  <!-- createRouter로 생성한 라우터가 보이는 영역 등록 -->
  <RouterView />
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
