<!-- 1. Provide & Inject -->
<template>
  <ChildComp :msg="msg" />
</template>

<script>
import ChildComp from './ChildComp.vue';

export default {
  components: {
    ChildComp,
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
};
</script>
