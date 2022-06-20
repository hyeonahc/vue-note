<template>
  <!-- v-bind="$attrs를 적용하면 부모 컴포넌트가 가지고 있는 모든 속성이 상속된다 -->
  <div v-bind="$attrs" class="btn" @click="hello"><slot></slot></div>
</template>

<script>
export default {
  // 컴포넌트의 최상위 요소가 하나면 부모 컴포넌트의 모든 속성을 자동으로 상속받게 된다
  // 이를 방지하기 위해 inheritAttrs: false 옵션을 사용했다
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'gray',
    },
  },
  // 부모컴포넌트에서 지정한 이벤트를 배열안에 등록해 자식 컴포넌트에서 사용해준다
  // emits에 등록한 이벤트를 사용하기 위해서는 emit() 메서드가 필요하다 
  emits: ['hello'],
  mounted() {
    // 개별 속성 사용
    // props
    console.log(this.color);
    // 모든 속성 사용
    // $attrs: 컴포넌트가 상속받는 모든 속성 (객체)
    console.log(this.$attrs);
  },
  methods: {
    hello() {
      // 부모 컴포넌트에서 등록한 이벤트 hello 실행해주기
      this.$emit('hello');
    },
  },
};
</script>
