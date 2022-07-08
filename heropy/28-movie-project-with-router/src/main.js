import { createApp } from 'vue'
import router from './routes'
// guards.js 파일을 연결만한다
// 해당 파일에 있는 코드 전체가 있는 것과 같다
import '~/routes/guards'
import App from './App.vue'

// routes/index.js에서 기본내보내기로 받아온 값을 플러그인처럼 등록해 사용해준다
createApp(App)
	.use(router)
	.mount('#app')
