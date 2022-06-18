<template>
  <!-- 특정한 요소나 컴포넌트를 참조할 수 있는 ref -->
  <!-- 1) ref로 요소 참조 -->
  <h1 ref="hello">Hello World</h1>
  <!-- 2) ref로 컴포넌트 참조 -->
  <HelloWorld ref="helloworld" />
  <!-- 3) ref로 컴포넌트 참조 - 컴포넌트의 최상위 요소가 여러개일때 -->
  <HelloWorld2 ref="helloworld2" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloWorld2 from './components/HelloWorld2.vue';

export default {
  components: {
    HelloWorld,
    HelloWorld2,
  },
  // created: 컴포넌트가 생성된 직후에 실행
  created() {
    // 등록한 요소나 컴포넌트를 조회할때는 s가 붙은 $refs
    console.log('요소: ', this.$refs.hello); // undefined
    console.log('컴포넌트: ', this.$refs.helloworld); // undefined
    console.log('컴포넌트2: ', this.$refs.helloworld2); // undefined
  },
  // mounted: HTML 구조에 연결이 된 직후에 실행
  mounted() {
    console.log('요소: ', this.$refs.hello); // <h1>Hello World</h1>
    console.log('컴포넌트: ', this.$refs.helloworld);
    // Proxy 객체 출력
    // Proxy > Target > $el
    // $el은 ref를 넣어준 컴포넌트의 최상위 요소를 의미한다
    // HelloWorld의 최상위요소는 h1이므로 $el은 <h1>Hello World</h1>이다
    console.log('컴포넌트: ', this.$refs.helloworld.$el);
    // helloworld2 컴포넌트의 최상위 요소는 한개 이상이다
    // #text 객체 출력

    console.log('컴포넌트2: ', this.$refs.helloworld2.$el);
    console.log('컴포넌트2: ', this.$refs.helloworld2.$refs.bye);
  },
};
</script>

<style></style>
