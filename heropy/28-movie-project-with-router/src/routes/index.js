import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'

// index.js에서 기본 내보내기로 createRouter 함수가 호출된 결과가 리턴된다
// 리턴된 결과를 main.js에 등록해서 사용한다
export default createRouter({
	// 어떤 모드를 사용할것인지 설정 (1. 해시모드 2. 히스토리모드)
	history: createWebHistory(), // 히스토리 모드 선택
	// 페이지 정보 명시
	routes: [
		{
			path: '/',
			component: Home
		}, 
		{
			path: '/movies/:movieId',
			component: Movie
		},
		{
			path: '/about',
			component: About,
			children: [
				{
					// domain/about/name
					path: 'name',
					component: AboutName
				}
			]
		},
		{
			path: '/:notFound(.*)*',
			component: NotFound
		}
	]
})
