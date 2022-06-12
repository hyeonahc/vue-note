<!-- 2. Computed 캐싱 -->
<template>
  <section>
    <!-- methods -->
    <p>{{ reverseMsg() }}</p>
    <p>{{ reverseMsg() }}</p>
    <p>{{ reverseMsg() }}</p>
    <!-- computed -->
    <p>{{ reversedMsg }}</p>
    <p>{{ reversedMsg }}</p>
    <p>{{ reversedMsg }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
  // methods vs computed
  // methods는 호출되면 실행되는 함수기 때문에 동사로 시작한다
  // reverseMsg() 함수를 호출한다 (호출되면 함수안에 값이 연산되기 시작한다)
  // computed는 이미 연산된 값을 불러오기 때문에 명사다
  // reversedMsg로 연산된 값을 불러온다 (값을 불러오기 전에 값은 연산되어 있다)
  methods: {
    reverseMsg() {
      return this.msg.split('').reverse().join('');
    },
  },
  // 한번 연산된값은 캐싱(메모리에 저장)되기 때문에 연산을 반복해서 하지 않아도된다
  // 같은 연산이 반복될때 최적화로 사용한다
  computed: {
    reversedMsg() {
      return this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style scoped></style>
