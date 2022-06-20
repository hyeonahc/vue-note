/* routes/index.js 페이지를 관리해주는 라우터 파일 */

// vue-router에 있는 createRouter, createWebHashHistory라는 메서드를 import해서 사용해준다
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import About from './About';

export default createRouter({
  // hash, history
  // hash mode: 특정 url로 이동할때 #과 /가 붙는다
  // https://google.com/#/search
  history: createWebHashHistory(),
  // routes: []
  // 특정 path에 component를 연결해주는 부분
  routes: [
    {
      // path: 도메인/url (https://google.com/)
      // component: 해당 path에 연결할 component
      path: '/',
      component: Home,
    },
    {
      // path: 도메인/about (https://google.com/about)
      // component: 해당 path에 연결할 component
      path: '/about',
      component: About,
    },
  ],
});
