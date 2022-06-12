<!-- 3. Getter & Setter -->
<template>
  <button @click="add">Add *</button>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Computed',
    };
  },
  computed: {
    // computed 옵션에 있는 함수의 리턴값은 읽기 전용(READ ONLY)이다
    // 값을 얻어내는 용도로만 사용하므로 reverseMsg는 Getter
    // reversedMsg() {
    //   return this.msg.split('').reverse().join('');
    // },
    // computed 옵션에 있는 reverseMsg 함수를 Getter, Setter가 모두 가능하게 하기 위해 다음과 같이 함수를 수정한다
    // 1. reversedMsg라는 객체를 만들어준다
    // 2. get(), set() 메서드를 만들어준다
    // 3. reversedMsg가 값을 얻어오는 용도의 로직은 get()으로
    // 4. reversedMsg가 값을 할당하는 용도의 로직은 set()으로
    reversedMsg: {
      get() {
        return this.msg.split('').reverse().join('');
      },
      // reversedMsg를 할당할때만 동작
      set(value) {
        this.msg = value;
      },
    },
  },
  methods: {
    add() {
      this.reversedMsg += '*';
    },
  },
};
</script>
