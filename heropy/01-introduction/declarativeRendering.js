// Vue에서 반응형데이터 만들고 화면에 출력해주기

// 반응형 데이터란?
// 데이터가 바뀔때 화면도 자동으로 바뀐 데이터를 출력해주는 것

// 반응형 데이터 만들기
// 방법 1: 객체 따로 빼주기
// Vue.createApp(객체이름).mount(HTML요소);
const Message = {
  // Message의 데이터
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  // Message의 메서드
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};

// HTML 문서에 message 아이디를 가지고 있는 요소가
// 객체 Message 안에 있는 데이터에 접근하기
Vue.createApp(Message).mount('#app');

// 방법 2: 객체를 createApp 메서드 안에서 생성해주면서 인자로 넘겨주기
// Vue.createApp({
//   data() {
//     return {
//       message: 'Hello Vue!',
//     };
//   },
// }).mount('#app');
