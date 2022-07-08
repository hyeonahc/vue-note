import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
import About from './About.vue'

export default createRouter({
	history: createWebHistory(),
	scrollBehavior: () => ({ top: 0 }),
	routes: [
		{
			path: '/signup',
			component: SignUp
		},
		{
			path: '/signin',
			component: SignIn
		},
		{
			path: '/about',
			component: About,
			meta: {
				auth: true
			}
		}
	]
})
