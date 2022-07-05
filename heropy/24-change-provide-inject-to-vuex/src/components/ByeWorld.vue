<template>
  <h1>{{ count }}</h1>
  <!-- computed 옵션으로 스토어에 있는 데이터를 불러와 계산된 데이터로 만들어준 후 사용  -->
  <!-- <h1>{{ message }}</h1> -->
  <!-- methods 옵션으로 스토어에 있는 actions를 불러와 메서드로 만들어준 후 사용 -->
  <!-- <button @click="updateMessage">
    UPDATE MESSAGE
  </button> -->
  <h1>{{ $store.state.message }}</h1>
  <button @click="$store.dispatch('updateMessage', 'Bye World')">
    UPDATE MESSAGE
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    // message() {
    //   return this.$store.state.message
    // }
  },
  methods: {
    // updateMessage() {
    //   this.$store.dispatch('updateMessage', 'Bye World')
    // }
  }
}
</script>
