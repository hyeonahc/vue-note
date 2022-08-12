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
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
      <div
        class="user"
        @click="toAbout">
        <img
          :src="image"
          :alt="name" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import { mapState } from 'vuex'

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
					href: '/movie/tt4520988',
					path: /^\/movie/ // 정규표현식으로 나타냄 /movie
				},
				{
					name: 'About',
					href: '/about'
				},
			]
		}
	},
	computed: {
		...mapState('about', ['image', 'name'])
	},
	methods: {
		isMatch(path) {
			if(!path) return false
			return path.test(this.$route.fullPath)
		},
		toAbout() {
			this.$router.push('/about')
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
	position: relative;
	.logo {
		margin-right: 40px;
	}
	.user {
		width: 40px;
		height: 40px;
		padding: 6px;
		border-radius: 50%;
		box-sizing: border-box;
		background-color: $gray-200;
		cursor: pointer;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 40px;
		margin: auto;
		transition: .4s;
		&:hover {
			background-color: darken($gray-200, 10%);
		}
		img {
			width: 100%;
		}
	}
	@include media-breakpoint-down(sm) {
		.nav {
			display: none;
		}
	}
}
</style>