import { createApp } from 'vue'
// 만들어준 heropy라는 플러그인을 import 해온다
import heropy from './plugins/heropy'
import App from './App.vue'

// Vue 프로젝트를 만들어주는 코드
// 메서드 체이닝으로 플러그인 연결해준 후 설치 .use(heropy)
createApp(App)
	.use(heropy)	
	.mount('#app')
