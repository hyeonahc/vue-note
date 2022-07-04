<template>
  {{ heropy }}
  <button @click="increase">increase</button>
</template>

<script>
export default {
  // store에 저장된 반응형 데이터를 다른 컴포넌트에서 불러오기 위해서는 computed 옵션을 사용해야한다
  computed: {
    // App 컴포넌트에서 store에 저장된 반응형데이터 count는 앞으로 heropy라는 이름으로 접근할 수 있다
    heropy() {
      // plugin에 접근하는것처럼 $ 달러사인으로 접근한다
      return this.$store.state.count
    }
  },
  methods: {
    // store에 저장된 count 데이터 0은 App.vue 컴포넌트에서 heropy라는 계산된 데이터로 접근할 수 있다
    // 하지만 store에 저장된 데이터를 수정할 수 있는 권한은 store에만 있다
    // 즉 아래의 코드는 this.heropy, store에 있는 데이터를 수정하는 코드이므로 불가하다
    // increase() {
    //   this.heropy += 1
    // }
    increase() {
      // store에 저장된 state를 수정하는 메서드(mutations 옵션)에 접근하기 위해서는 commit이라는 키워드가 필요하다
      // this.$store.commit('메서드 이름')
      // commit 키워드: mutations 옵션에 있는 메서드를 컴포넌트에 불러오는 용도 BUT 컴포넌트에서 store에 있는 메서드를 접근할 때는 mutations보다 actions 사용을 더 권장한다
      // mutations 옵션을 사용하는 commit 키워드는 비추천
      // this.$store.commit('increase')
      // actions 옵션을 사용하는 dispatch 키워드를 사용해 메서드를 호출하자!!!
      this.$store.dispatch('increase')
    }
  }
}
</script>