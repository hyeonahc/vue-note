<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <!-- 링크가 active될때 default값 active-class="router-link-class" -->
        <!-- Bootstrap에서 active라는 클래스에 특별한 스타일링을 주기 때문에 active되었을대 default class 값을 active로 바꿔준다 -->
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
	components: {
		Logo
	},
	data() {
		return {
			navigations: [
				{
					name: 'Search',
					href: '/'
				},
				{
					name: 'Movie',
					href: '/movie'
				},
				{
					name: 'About',
					href: '/about'
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
header {
	height: 70px;
	padding: 0 40px;
	display: flex;
	align-items: center;
	
	.logo {
		margin-right: 40px;
	}
}
</style>