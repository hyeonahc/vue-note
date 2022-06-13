<template>
  <p @click="changeMessage">{{ msg }}</p>
  <p>{{ reversedMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello?',
    };
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    },
  },
  // data 함수의 리턴값으로 정의된 데이터의 변경사항을 감시
  // 데이터가 변경되는 것을 감시해서 로직처리를 하고 싶을때 watch 옵션을 사용한다
  // 데이터가 업데이트 되었을때 어떤 로직을 실행하고 싶다면 watch라는 옵션을 안에 해당 데이터를 감시하는 메서드를 만들어 그 안에 처리하고싶은 로직을 써준다
  watch: {
    // msg: function() {}의 축약형
    // this.데이터이름 대신 첫번째 매개변수로 변경된값이 들어오므로 그 값을 대신 사용할 수 있다
    // this.msg === value (함수의 첫번째 파라미터로 들어온값)
    msg(value) {
      console.log('msg: ', this.msg);
      console.log('msg: ', value);
    },
    reversedMessage(value) {
      console.log('reversedMessage: ', this.reversedMessage);
      console.log('reversedMessage: ', value);
    },
  },
  methods: {
    changeMessage() {
      this.msg = 'Bye!';
    },
  },
};
</script>
