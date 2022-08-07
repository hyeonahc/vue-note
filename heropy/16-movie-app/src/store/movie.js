import axios from 'axios'

export default {
	// namespaced: 해당 store를 module화 해서 index.js 파일에 있는 modules에 등록하기 위해 사용
	// namespaced: true 값으로 설정해 movie.js 파일을 하나의 모듈로 만들어준다
	namespaced: true,
	// state: 데이터 (data 옵션과 같은 역할)
	state: () => ({
		movies: [],
		message: '',
		loading: false
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
		// 영화 데이터 state에 저장
		// 단점: state 옵션 안에 저장된 여러 state를 업데이트하기 위해 하나의 state에 하나의 함수가 필요하다
		// => 여러 state를 한번에 업데이트할 수 있는 global한 함수를 만들어서 활용해보자
		// assignMovies (state, Search) {
		// 	state.movies = Search
		// },
		// 여러 state를 한번에 업데이트할 수 있는 global한 함수
		updateState(state, payload) {
			// 객체의 key 이름으로 새로운 배열을 생성해준다
			// ['movies', 'message', 'loading']
			Object.keys(payload).forEach(key => {
				state[key] = payload[key]
			})
		},
		// 영화 데이터 초기화
		resetMovies(state) {
			state.movies = []
		}
	},
	// actions 옵션 안에 있는 모든 함수들은 async, await와 같은 키워드 없이도 비동기로 동작한다
	actions: {
		// 1. 첫번째 인수: context
		// - state, getters, commit, dispatch가 들어있다
		// - state: state에 접근할 수 있는 객체
		// - getters: getters에 접근할 수 있는 객체
		// - commit: mutations을 호출하는 함수
		// dispatch: actions를 호출하는 함수
		// 2. 두번째 인수: payload 
		// - 해당 함수가 실행할 때 넘겨줄값을 받아오는 인수 searchMovies(something)
		async searchMovies({ commit }, payload) {
			const { title, type, number, year} = payload
			const OMDB_API_KEY = '7035c60c'
			const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
			const { Search, totalResults } = res.data
			console.log(Search, totalResults)
			// context.methods('메서드이름', payload)
			commit('updateState', {
				movies: Search,
			})
		}
	},
}