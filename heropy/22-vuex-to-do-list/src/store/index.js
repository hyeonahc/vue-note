import { createStore } from 'vuex';
// 따로	경로 표시가 안되어있는것을 import하면 node modules에서 패키지를 찾아 import 해준다
import axios from 'axios';

// API에서 자주쓰는 데이터 변수에 넣어줘서 코드 줄여주기
const END_POINT =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
const headers = {
  // 특수 기호(-)가 있는 키는 따옴표로 묶어준다
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2_HyeonAhCho',
};

export default createStore({
  // state: 모든 컴포넌트들이 접근할 수 있는 데이터 전역 저장소
  // API로 저장된 todos 데이터를 가져와 state에 저장해준다
  state() {
    return {
      todos: [],
    };
  },
  // mutations: state에 수정권한이 있는 메서드
  mutations: {
    // setTodos의 파라미터 2가지
    // 1. state: 스토어에 선언된 state
    // 2. payload: 서버에서 받아온 저장된 todos 데이터
    setTodos(state, payload) {
      state.todos = payload;
    },
  },
  // actions: mutations에 선언한 메서드를 가져와 컴포넌트에서 접근할 수 있도록 하는 옵션
  // actions에서 선언한 메서드는 context라는 파라미터를 가진다
  // actions: { method(context) { const { state, getters, commit, dispatch } = context } }
  // state: state에 접근할 수 있는 객체
  // getters: getters에 접근할 수 있는 객체
  // commit: mutations을 호출하는 함수
  // dispatch: actions를 호출하는 함수
  actions: {
    async readTodos({ commit }) {
      const res = await axios({
        // 요청할 주소 (서버 주소)
        url: END_POINT,
        // 요청 방식 (데이터 읽어오기: GET 메서드) 이때 메서드 이름은 Uppercase로 써준다
        method: 'GET',
        // 서버에 요청할 정보
        // headers: headers,
        headers,
      });
      // console.log(res);
      commit('setTodos', res.data);
    },
    async createTodo(context, title) {
      const res = await axios({
        // 요청할 주소 (서버 주소)
        url: END_POINT,
        // 요청 방식 (데이터 생성하기: POST 메서드) 이때 메서드 이름은 Uppercase로 써준다
        method: 'POST',
        // 서버에 요청할 정보
        // headers: headers,
        headers,
        data: {
          // title: title
          title,
        },
      });
      console.log(res);
    },
  },
});
