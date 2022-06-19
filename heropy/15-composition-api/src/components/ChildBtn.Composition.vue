<template>
  <div v-bind="$attrs" class="btn" @click="hello"><slot></slot></div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'gray',
    },
  },
  emits: ['hello'],

  // setup의 첫번째 매개변수 props 두번째 매개변수 context
  // props
  // 등록한 props를 사용 (props.등록한props이름)
  // context ($ 필요없음)
  //1) 모든 속성에 접근할 수 있는 attrs를 사용 (context.attrs)
  // 2) 등록한 이벤트를 사용할 수 있는 emit을 사용
  setup(props, context) {
    function hello() {
      context.emit('hello');
    }
    onMounted(() => {
      console.log(props.color);
      console.log(context.attrs);
    });

    return {
      hello,
    };
  },
};
</script>
