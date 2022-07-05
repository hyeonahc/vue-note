import { createStore } from 'vuex'

// count 데이터, count 데이터를 수정하는 메서드, count 데이터의 값을 변경하고 전달해주는 메서드
export default createStore({
	// state: 반응형 데이터
	state() {
		return  {
			count: 0,
			message: 'Hello World'
		}
	},
	// mutations: state를 수정할 권한이 있는 옵션
	// 비동기적 또는 동기적 코드 x 단순히 state를 재할당 o
	// mutations에서는 state의 값을 수정할 권한이 있다 즉 state 데이터를 할당연산자(=)를 사용해 값을 재할당할 수 있다 
	mutations: {
		setState(state, payload) {
			for (const key in payload) {
				// 할당연산자(=)를 사용해 state 데이터를 재할당해 값을 수정한다
				state[key] = payload[key]
			}
		}
	},
	// actions: mutations에서 만든 메서드를 가져와 컴포넌트에서 접근할 수 있도록 한다
	// 비동기적 또는 동기적 코드 o 단순히 state를 재할당 x
	// actions에서는 state의 값을 수정할 권한이 없기 때문에 state 데이터를 할당연산자를 사용해 값을 재할당 할 수는 없다. 고로 actions는 state값을 연산하고 mutations에 넘겨주는 역할까지만하고 state 값을 할당해주는 역할은 mutations에 맡겨야한다
	actions: {
		increase({ state, commit }) {
			commit('setState', {
				// state 데이터를 연산하는 단계까지만하고 mutations 옵션에 넘겨주어 재할당(데이터의 수정)은 mutations에서 일어나도록 한다
				count: state.count + 1,
				message: 'Hello World'
			})
		},
		updateMessage({ commit }, msg) {
			commit('setState', {
				message: msg
			})
		}
	}
})
