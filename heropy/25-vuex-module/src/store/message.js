// 모듈 내보내기
export default {
	// modules 옵션을 사용하기 위해 필요한 옵션: namedspaced: true (이름범위)
	namespaced: true,
	state() {
		return  {
			message: 'Hello World',
		}
	},
	getters: {

	},
	mutations: {
		setState(state, payload) {
			for (const key in payload) {
				state[key] = payload[key]
			}
		}
	},
	actions: {
		updateMessage({ commit }, msg) {
			commit('setState', {
				message: msg 
			})
		}
	}
}
