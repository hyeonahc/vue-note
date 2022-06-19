<template>
  <ChildBtn class="heropy" style="color: red" color="#ff0000" @hello="log"
    >Button</ChildBtn
  >
</template>

<script>
import ChildBtn from './ChildBtn.vue';

export default {
  components: {
    ChildBtn,
  },
  methods: {
    log() {
      console.log('Hello World');
    },
  },
};
</script>
