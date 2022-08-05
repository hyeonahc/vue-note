export default {
	// namespaced: 해당 store를 module화 해서 index.js 파일에 있는 modules에 등록하기 위해 사용
	// namespaced: true 값으로 설정해 movie.js 파일을 하나의 모듈로 만들어준다
	namespaced: true,
	// state: 데이터 (data 옵션과 같은 역할)
	state: () => ({
		movies: []
	}),
	// getters: 계산된 state 값 (computed 옵션과 같은 역할)
	getters: {
		movieIds(state) {
			return state.movies.map(m => m.imdbID)
		}
	},
	// mutations, actions: state 값을 업데이트시켜주는 함수 (methods 옵션과 같은 역할)
	// mutations: state 값을 업데이트시킬 수 있는 옵션 (직접 수정 불가, actions를 통해 state 값 업데이트 가능)
	mutations: {
		// 영화 데이터 초기화
		resetMovies(state) {
			state.movies = []
		}
	},
	// actions 옵션 안에 있는 모든 함수들은 async, await와 같은 키워드 없이도 비동기로 동작한다
	actions: {

	},
}