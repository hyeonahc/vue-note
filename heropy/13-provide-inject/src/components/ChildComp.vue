<template>
  <h1>Child (props): {{ msg }}</h1>
  <h1>Child (provide): {{ msg2 }}</h1>
  <h1>Child (provide/computed): {{ msg3 }}</h1>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  inject: ['msg2', 'msg3'],
};
</script>
