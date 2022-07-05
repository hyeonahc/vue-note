<template>
  <h1>{{ count }}</h1>
  <!-- <h1>{{ $store.state.message }}</h1> -->
  <!-- 모듈화된 스토어에서 데이터를 가지고올때는 등록한 namespaced를 거쳐야한다 -->  
  <h1>{{ $store.state.message.message }}</h1>
  <button @click="$store.dispatch('message/updateMessage', 'Bye World')">
    UPDATE MESSAGE
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    }
    // message() {
    //   return this.$store.state.message.message
    // }
  },
  // methods: {
  //   updateMessage() {
  //     this.$store.dispatch('updateMessage', 'Bye World')
  //   }
  // }
}
</script>
