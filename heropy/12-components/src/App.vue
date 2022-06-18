<template>
  <h1>1. 컴포넌트 - 기초</h1>
  <MyBtn>Apple</MyBtn>
  <!-- props로 color="royalblue"를 전달했다 -->
  <MyBtn color="royalblue">Apple</MyBtn>
  <MyBtn color="#000">Apple</MyBtn>
  <!-- 데이터를 전달해줄때는 v-bind: 또는 :를 key 앞에 써준다 -->
  <MyBtn :color="color">Apple</MyBtn>
  <MyBtn large>Apple</MyBtn>
  <!-- slot태그로 처리할 수 있다 -->
  <!-- <MyBtn text="Banana" /> -->
  <MyBtn>Banana</MyBtn>
  <hr />
  <h1>2. 컴포넌트 - 속성 상속</h1>
  <!-- 컴포넌트 MyBtn2에 class로 maple을 전달해주었다 -->
  <MyBtn2 class="maple" style="color: red">Banana</MyBtn2>
  <hr />
  <h1>3. 컴포넌트 - Emit</h1>
  <!-- Emit으로 등록해줄 이벤트는 이름을 자유롭게 사용한다 -->
  <!-- HTML 속성에 camelCase를 사용할 수 없다 (dash-case 만 사용할 수 있음) -->
  <MyBtn3 @click="log" @write-click="log" @change-msg="logMsg">Cherry</MyBtn3>
  <hr />
  <h1>4. 컴포넌트 - slot</h1>
  <MyBtn4>Apple</MyBtn4>
  <MyBtn5>
    <template v-slot:icon><span>(B) </span></template>
    <template v-slot:text><span>Banana</span></template>
  </MyBtn5>
  <MyBtn5>
    <!-- v-slot의 축약형 # -->
    <!-- v-slot에 있는 텍스트는 자식 컴포넌트에 해당 이름이 있는 요소로 전달되므로 화면에 출력되는 순서가 보장된다 -->
    <template #text><span>Banana</span></template>
    <!-- 먼저 출력 -->
    <template #icon><span>(B) </span></template>
  </MyBtn5>
</template>

<script>
import MyBtn from './components/MyBtn.vue';
import MyBtn2 from './components/MyBtn2.vue';
import MyBtn3 from './components/MyBtn3.vue';
import MyBtn4 from './components/MyBtn4.vue';
import MyBtn5 from './components/MyBtn5.vue';

export default {
  name: 'App',
  components: {
    MyBtn,
    MyBtn2,
    MyBtn3,
    MyBtn4,
    MyBtn5,
  },
  data() {
    return {
      color: '#000',
    };
  },
  methods: {
    log(event) {
      console.log(event);
      console.log('Click');
    },
    logMsg(msg) {
      console.log(msg);
    },
  },
};
</script>

<style></style>
