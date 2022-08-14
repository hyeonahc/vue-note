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
		// 로그인한 상태를 만들어주기 위해 웹브라우저 Application에 currentUser의 값으로 { "name": "maple" }를 등록한다
		// 로그인한 사용자만 들어갈 수 있는 About 컴포넌트에 접속한다
		// to.meta.auth값으로 true를 가진 About 컴포넌트만 코드가 실행된다 (다른 컴포넌트로 접속하면 guards.js 코드가 실행되지 않음)
		// currentUser 객체에 있는 값 name을 구조분해할당을 하며 값을 꺼내준다
		// name의 값이 있으면 (로그인이 된 상태면) true가 리턴되고 About 페이지에 접속이 가능해진다
		// name의 값이 없으면 (로그인이 안된 상태면) '/'가 리턴되고 Home 페이지로 튕겨져 나간다
		const { name } = JSON.parse(localStorage.getItem('currentUser') || '{}')
		if(name) {
			return true
		} else {
			return '/'
		}
	}
	return true
})
