<template>
  <TheHeader />
  <!-- 라우터에 등록한 컴포넌트 불러오기 -->
  <RouterView />
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  watch: {
    $route(newValue) {
      console.log(newValue)
    }
  },
  // 라우터에서는 달러사인($) 기호를 시작으로 하는 두개의 객체를 제공한다
  // 1. $router
  // 페이지 이동을 명령하는 데이터(함수)가 들은 객체
  // i.e.) $router.push(‘주소’)
  // 2. $route
  // 현재 페이지에 대한 정보가 들어 있다
  // i.e.) this.$route.params.id
	mounted() {
		console.log('$router:', this.$router)
		console.log('$route:', this.$route)
	}
}
</script>
