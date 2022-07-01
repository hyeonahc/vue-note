// heropy.js라는 플러그인 생성

// 외부로 나가는 통로가 되어줄 export 키워드
export default {
	// in
	// app은 현재 뷰 프로젝트를 의미한다
	// main.js에서 const app = create(App); app.mount('#app'); 코드를 사용해 뷰프로젝트를 만들어주었다
	install(app) {
		// 데이터에 접근할때 해당 컴포넌트에서 선언한 데이터인지 플러그인인지 명확하지 않다
		// App.vue에서 플러그인을 불러올때: console.log(this.heropy)
		// app.config.globalProperties.heropy = 12345
		// $ 달라사인 키워드를 데이터에 추가해줘서 구분해준다
		// 플러그인에 함수를 넣어주고 msg 매개변수를 받아 기본값 설정도 해준다 (msg라는 매개변수가 오지 않으면(undefined면) 기본값 heropy 문자열 데이터를 넣어준다)
		app.config.globalProperties.$heropy = (msg = 'heropy') => {
			return `hello ${msg}`
		}
	}
}