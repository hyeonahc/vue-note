<template>
  <h1 @click="increase">{{ count }} / {{ doubleCount }}</h1>
  <h1 @click="changeMessage">{{ message }} / {{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: 'Hello World',
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    message(newValue) {
      console.log(newValue);
    },
  },
  // 컴포넌트가 생성된 직후에 실행
  created() {
    console.log(this.message);
  },
  // HTML과 컴포넌트가 연결이된 직후에 실행
  mounted() {
    console.log(this.count);
  },
  methods: {
    increase() {
      this.count += 1;
    },
    changeMessage() {
      this.message = 'Bye World';
    },
  },
};
</script>
