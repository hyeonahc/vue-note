import { createApp } from 'vue';
import App from './App.vue';
// router: 페이지를 관리해주는 용도로 사용하는 패키지
import router from './routes/index.js';

// use(): 특정 플러그인을 연결할때 사용하는 메서드
createApp(App).use(router).mount('#app');
