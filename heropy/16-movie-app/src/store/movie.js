import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
	// namespaced: 해당 store를 module화 해서 index.js 파일에 있는 modules에 등록하기 위해 사용
	// namespaced: true 값으로 설정해 movie.js 파일을 하나의 모듈로 만들어준다
	namespaced: true,
	// state: 데이터 (data 옵션과 같은 역할)
	state: () => ({
		movies: [],
		message: 'Search for the movie title!',
		loading: false,
		theMovie: {}
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
		async searchMovies({ state, commit }, payload) {
			// loading이 되고 있는데 사용자가 searchMovies 함수를 또 실행한다면(영화검색을 여러번 요청한다면) 여러번 요청을 방지하기 위해 searchMovies 함수를 종료시킨다
			// 즉 loading이 되고 있는 상태에서는 영화검색을 요청할 수 없다
			if(state.loading) return

			commit('updateState', {
				message: '',
				loading: true
			})

			try {
				const res = await _fetchMovie({
					...payload,
					page: 1
				})
	
				const { Search, totalResults } = res.data
				// context.methods('메서드이름', payload)
				// 중복된 id를 가진 영화를 가져오지 않도록 lodash의 uniqBy 기능을 사용해 같은 imdbID가 같은 영화 데이터가 하나만 남도록 필터링해준느 작업을 한다
				commit('updateState', {
					movies: _uniqBy(Search, 'imdbID'),
				})
	
				// 페이지 추가 요청
				const total = parseInt(totalResults, 10) // 38
				// 한 페이지에 10개의 영화 데이터를 가져오므로 10으로 나눈값이 pageLength가 된다
				const pageLength = Math.ceil(total / 10) // 4 // 총 4번 요청해야 모든 영화데이터를 불러올수 있음
	
				// 영화 데이터가 11 이상일 경우에 추가 요청을 할 수 있다
				// pageLength가 1인경우에는 더이상 추가할 페이지가 없다
				if(pageLength > 1 ) {
					// API 처음 요청시에는 page가 1이었지만 두번째 요청에는 page가 2로 업데이트된다
					for(let page = 2; page <= pageLength; page += 1) {
						// number: 사용자가 필터에서 선택한 숫자 데이터 10, 20, 30 중 하나로 보여줄 영화데이터 개수를 의미함
						// 초기 요청시 page는 2로 업데이트되고 요청한 영화 데이터의 수가 10일 경우에는 if 조건문을 만족하므로 반복문이 종료되면서 추가 요청이 발생하지 않는다
						// number가 10일 경우에는 기본 요청이 이루어지고 number가 20, 30 중 하나일 경우에만 추가 요청이 발생되는 코드다
						if(page > (payload.number / 10)) break
						const res = await _fetchMovie({
							...payload,
							page
						})
						const { Search } = res.data
						commit('updateState', {
							movies: [
								...state.movies,
								..._uniqBy(Search, 'imdbID')
							]
						})
					}
				}
			} catch(message) {
				commit('updateState', {
					movies: [],
					message
				})
			} finally {
				commit('updateState', {
					loading: false
				})
			}
		},
		async searchMovieWithId({ state, commit }, payload) {
			if (state.loading) return	
			
			// theMovie의 state 값을 비워주면서 데이터를 받아오기전에 예전 영화 데이터가 보여지는 현상을 방지해준다
			commit('updateState', {
				theMovie: {},
				loading: true
			})

			try {
				const res = await _fetchMovie(payload)
				commit('updateState', {
					theMovie: res.data
				})
				console.log('state.theMovie: ', state.theMovie)
			} catch(error) {
				commit('updateState', {
					theMovie: {}
				})
			} finally {
				commit('updateState', {
					loading: false
				})
			}
		}
	},
}

function _fetchMovie(payload) {
	const { title, type, year, page, id } = payload

	const OMDB_API_KEY = '7035c60c'
	const url = id ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

	return new Promise((resolve, reject) => {
		axios.get(url)
			.then(res => {
				if(res.data.Error) {
					reject(res.data.Error)
				}
				resolve(res)
			})
			.catch(err => {
				reject(err.message)
			}) 
	})
}	