<template>
  <h1 @click="increase">{{ count }} / {{ doubleCount }}</h1>
  <h1 @click="changeMessage">{{ message }} / {{ reversedMessage }}</h1>
</template>

<script>
// onMounted 라는 라이프사이클은 존재하지만 onCreated 라는 라이프 사이클은 존재하지 않는다
import { ref, computed, watch, onMounted } from 'vue';

export default {
  // setup()이라는 메서드는 컴포넌트가 생성된 직후에 실행되는 메서드이기 때문에 created()라는 라이프 사이클 대신 사용할 수 있다
  setup() {
    // count와 관련된 변수와 함수
    // ref로 만든 count는 반응성을 가지는 객체 데이터
    const count = ref(0);
    const doubleCount = computed(() => {
      return count.value * 2;
    });
    function increase() {
      count.value += 1;
    }

    // message와 관련된 변수와 함수
    const message = ref('Hello World');
    const reversedMessage = computed(() => {
      return message.value.split('').reverse().join('');
    });
    function changeMessage() {
      message.value = 'Bye World';
    }
    console.log(message.value);

    // watch(감시할 데이터, 실행하고 싶은 로직을 콜백함수안에 넣어줌)
    // watch(data, (newData) => {})
    // 감시할 데이터에 변경사항이 생기면 업데이트된 데이터를 콜백함수의 파라미터로 받아 로직을 실행할 수 있다
    watch(message, newValue => {
      console.log(newValue);
    });

    onMounted(() => {
      console.log(count.value);
    });

    return {
      count,
      doubleCount,
      increase,
      message,
      reversedMessage,
      changeMessage,
    };
  },
};
</script>
