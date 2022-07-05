import { createStore } from 'vuex'
// 모듈 불러오기
import message from './message'
import count from './count'

// 두가지 state를 모듈화(각기 다른 파일을 사용)해서 관리해주자
// 1. count 2. message 
export default createStore({
	// 모듈 등록하기
	modules: {
		// message라는 불러온 모듈을 heropy라는 이름으로 등록해주기
		// message: message
		message,
		// count: count
		count
	}
})
