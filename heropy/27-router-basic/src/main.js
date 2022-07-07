import { createApp } from 'vue'
import App from './App.vue'
// routes 폴더 안에 있는 index 파일에 자동으로 접근한다
import router from './routes'

createApp(App)
  // router를 플러그인 형태로 연결해주기
	.use(router)
	.mount('#app')
