import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

// createRouter({ 옵션 })
export default createRouter({
	// history 모드로 할 것인지 hash 모드로 할 것인지 지정
	// history 모드: createWebHistory()
	// hash 모드: createWebHashHistory()
	history: createWebHistory(),
	// routes는 하나의 페이지 개념
	// https://www.google.com/
	// 도메인: https://www.google.com
	// 접근 주소: / (메인 페이지)
	// route로 관리할 컴포넌트를 등록한다
	routes: [
		{
			// 주소
			path: '/',
			// 해당 주소에 연결할 컴포넌트
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			// NotFound 컴포넌트는 배열의 가장 마지막에 위치시켜야 등록된 다른 컴포넌트가 주소에 맞게 렌더링된다
			// path: '/:heropy(정규표현식)'
			path: '/:heropy(.*)*',
			component: NotFound
		}
	]
})
