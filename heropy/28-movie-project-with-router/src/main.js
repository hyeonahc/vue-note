import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'

// routes/index.js에서 기본내보내기로 받아온 값을 플러그인처럼 등록해 사용해준다
createApp(App)
	.use(router)
	.mount('#app')
