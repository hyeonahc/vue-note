<template>
  <h1>{{ message }}</h1>
  <button @click="updateMessage">
    UPDATE MESSAGE
  </button>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE + 1
  </button>
</template>

<script>
export default {
  // 스토어에 저장된 데이터를 컴포넌트에서 불러올때는 반드시 computed 옵션을 사용한다
  computed: {
    count() {
      return this.$store.state.count
    },
    message() {
      return this.$store.state.message
    }
  },
  // 컴포넌트에서 스토어에 저장된 state를 수정하는 메서드는 스토어에서 진행된다
  // 스토어에서 state를 수정하는 옵션은 1) mutations 2) actions가 있다
  // mutations: state를 수정하는 메서드를 가지는 옵션
  // actions: mutations에서 만든 메서드를 가져와 컴포넌트에서 접근할 수 있도록 한다
  // 스토어 mutations 옵션에 선언된 메서드를 불러올때: commit()
  // 스토어 actions 옵션에 선언된 메서드를 불러올때: dispatch()
  methods: {
    increase() {
      this.$store.dispatch('increase')
    },
    updateMessage() {
      this.$store.dispatch('updateMessage', 'Bye World')
    }
  }
}
</script>
