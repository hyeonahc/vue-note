<template>
  <!-- 여기서 class="active"는 prop이 아닌 속성 즉 nonprops 이다-->
  <!-- nonprop 속성은 컴포넌트의 최상위 요소에게 전달된다 -->
  <!-- 이때 컴포넌트의 최상위 요소가 하나 이상일 경우에는 전달되지 않는다 -->
  <!-- 컴포넌트에 등록한 props는 컴포넌트의 최상위 요소에 전달되지 않는다 -->
  <HelloWorld
    :message="message"
    class="active"
    good="123"
    @click="message = message.split('').reverse().join('')" />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Bye World'
    }
  }
}
</script>
