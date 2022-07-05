<template>
  <HelloWorld />
  <ByeWorld />
</template>

<script>
import { computed } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import ByeWorld from '~/components/ByeWorld.vue'

export default {
  components: {
    HelloWorld,
    ByeWorld
  },
  provide() {
    return {
      // App.vue의 하위 컴포넌트에서 App.vue에서 선언한 데이터에 접근하기 위해 provide를 사용해주었다
      // 데이터 등록
      count: computed(() => this.count),
      // 메서드 등록
      increase: this.increase
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1
    }
  }
}
</script>
