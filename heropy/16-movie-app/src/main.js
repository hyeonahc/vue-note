import { createApp } from 'vue';
import App from './App.vue';
// router: 페이지를 관리해주는 용도로 사용하는 패키지
// 폴더 안에 있는 index라는 이름을 가진 파일을 불러올때는 해당 파일 경로를 생략할 수 있다
// import router from './routes/index.js';
import router from './routes';
import store from './store'

// use(): 특정 플러그인을 연결할때 사용하는 메서드
createApp(App)
  .use(router)
	.use(store)
	.mount('#app');
