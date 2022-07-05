<template>
  <HelloWorld />
  <ByeWorld />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue'
import ByeWorld from '~/components/ByeWorld.vue'

export default {
  components: {
    HelloWorld,
    ByeWorld,
  }
}
</script>
