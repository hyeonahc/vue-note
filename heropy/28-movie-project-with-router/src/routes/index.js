import { createRouter, createWebHashHistory } from 'vue-router'
// ~ === src/components
import TheHeader from '~/components/TheHeader.vue'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'

// index.js에서 기본 내보내기로 createRouter 함수가 호출된 결과가 리턴된다
// 리턴된 결과를 main.js에 등록해서 사용한다
export default createRouter({
	// 어떤 모드를 사용할것인지 설정 (1. 해시모드 2. 히스토리모드)
	// 해시모드
	// https://google.com/#/login
	// 해시 기호를 기준으로 주소가 변경된다
	history: createWebHashHistory(), // 해시모드 모드 선택
	scrollBehavior: () => {
		return {
			top: 0,
		}
	},
	// 화살표 함수 축약형
	// scrollBehavior: () => ({ top: 0 }),
	// 페이지 정보 명시
	routes: [
		{
			path: '/',
			// Home.vue 컴포넌트에서만 TheHeader.vue 컴포넌트 보여주는 작업
			// component: Home
			// <RouterView name="TheHeader" />
			components: {
				// 'TheHeader': TheHeader,
				// 순서 관계 없음 (객체 데이터는 키와 밸류의 모음집일뿐)
				TheHeader,
				default: Home
			}
		}, 
		{
			path: '/movies/:movieId',
			component: Movie
		},
		{
			path: '/about',
			component: About,
			// meta: about 페이지에 정보를 전달해준다
			// meta 정보 접근 방법: $route.meta
			meta: { auth: true },
			children: [
				{
					// domain/about/name
					path: 'name',
					component: AboutName,
					redirect: '/'
				}
			]
		},
		{
			path: '/:notFound(.*)*',
			component: NotFound
		}
	]
})
