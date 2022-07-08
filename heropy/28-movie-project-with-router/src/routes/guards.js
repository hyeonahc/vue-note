import router from './index.js'

// 콜백함수에 들어가는 두개의 인자
// to, from
// to: 어디로 들어가는지
// $route와 같은 역할
// 즉 meta에 접근 할수 있다
// to라는 매개변수는 내가 접근하려고 하는 해당하는 페이지에 대한 정보를 들고 있는 객체
// from: 어디서부터 시작되는지
router.beforeEach(to => {
	// meta에 auth의 값이 있는 컴포넌트는 About 이므로
	// About 페이지에 접속할때만 콘솔창에 메타정보가 뜬다
	// console.log('to.meta.auth', to.meta.auth)
	if(to.meta.auth) {
		// Application에 currentUser	{ "name": "Heropy" }를 등록한다
		// name이 있으면 로그인이 된 상태라고 가정
		// 통과한 user: about 페이지 접속 가능
		// 통과하지 못한 user: about 페이지 접속 불가, main 페이지로 돌아감
		// currentUser에 등록된 사용자 정보가 없다면 about 페이지에 접속하지 못하고 튕겨져 나간다
		const { name } = JSON.parse(localStorage.getItem('currentUser') || '{}')
		if(name) {
			return true
		} else {
			return '/'
		}
	}
	return true
})
