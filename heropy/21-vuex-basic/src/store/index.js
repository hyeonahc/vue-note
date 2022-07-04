// store > index.js
// 컴포넌트에서 사용할 모든 반응형데이터를 담아둘 index.js 파일을 만든다
import { createStore } from 'vuex';

export default createStore({
  // state: 반응형 데이터 저장소
  state() {
    return {
      count: 0,
    };
  },
  // getters: 계산된 데이터
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  // mutations: state에 저장된 데이터 수정하는 메서드
  // state의 데이터에 접근하기위해 mutations 안에 선언된 메서드는 state를 매개변수로 가진다
  // mutations 옵션에서는 state에 저장된 데이터를 수정하는 용도로 사용하고 컴포넌트에서 mutations 옵션에 선언된 메서드를 접근하고 싶을때는 actions 옵션 사용을 권장한다
  mutations: {
    // increase: state에 저장된 count값을 수정하는 메서드
    increase(state) {
      state.count += 1;
    },
  },
  // actions: mutations에 선언한 메서드를 가져와 컴포넌트에서 접근할 수 있도록 하는 옵션
  actions: {
    increase(context) {
      // const { state, getters, commit, dispatch } = context
      // state: state에 접근할 수 있는 객체
      // getters: getters에 접근할 수 있는 객체
      // commit: mutations 옵션 안에 있는 메서드를 호출하는 함수
      // dispatch: actions 옵션 안에 있는 메서드를 호출하는 함수
      const { commit } = context;
      commit('increase');
    },
    // 메서드 자체에서 바로 구조분해할 수도 있다
    // increase({ commit }) { commit('increase') }
  },
});
