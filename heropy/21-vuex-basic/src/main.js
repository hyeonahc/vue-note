import { createApp } from 'vue'
// index는 가장 기본 파일이기 때문에 파일경로에서 생략해도 자동으로 가져와진다
import store from './store'
import App from './App.vue'

createApp(App)
	.use(store)
	.mount('#app')
