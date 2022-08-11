// loadImage 라는 플러그인 생성
/*
export default로 하나의 객체데이터를 기본 내보내기로 지정
install이라는 메서드가 플러그인으로 사용될때 매개변수로 어떤 객체데이터를 내려주게 된다 install(app)
app 객체 안에 있는 config라는 속성 내부에 globalProperties라는 속성을 사용 그리고 내가 등록하고 싶은 함수 $loadImage를 만들어준다
app.config.globalProperties.$등록할함수이름 = 함수
*/
export default {
	install(app) {
		app.config.globalProperties.$loadImage = src => {
			return new Promise(resolve => {
				const img = document.createElement('img')
				img.src = src
				img.addEventListener('load', () => {
					resolve()
				})
			})
		}
	}
}