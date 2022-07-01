<template>
  <!-- <h1>{{ msg }}</h1>
  <TextField v-model="msg" /> -->
  <button @click="compName='ABC'">
    ABC
  </button>
  <button @click="compName='XYZ'">
    XYZ
  </button>
  <!-- 동적 컴포넌트 -->
  <!-- is="컴포넌트이름"을 넣으면 해당하는 컴포넌트가 리턴된다 -->
  <Component :is="compName" />
</template>

<script>
// import TextField from '~/components/TextField.vue'
import ABC from '~/components/ABC.vue'
import XYZ from '~/components/XYZ.vue'

export default {
  components: {
    // TextField,
    ABC,
    XYZ
  },
  data() {
    return {
      msg: 'Hello Vue',
      compName: 'ABC'
    }
  }
}
</script>

<style>
</style>
