<template>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE + 1
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    // count 스토어에 등록된 여러개의 state를 한번에 배열로 불러오는 작업
    ...mapState('count', ['count'])
    // count 스토어에 등록된 state를 하나하나 불러오는 작업
    // count() {
    //   return this.$store.state.count.count
    // },
  },
  methods: {
    // count 스토어에 등록된 여러개의 methods를 한번에 배열로 불러오는 작업
    ...mapActions('count', ['increase'])
    // count 스토어에 등록된 methods를 하나하나 불러오는 작업
    // increase() {
    //   this.$store.dispatch('count/increase')
    // },
  }
}
</script>
