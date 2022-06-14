<!-- 1. 클래스 바인딩 (객체 따로빼주기) -->
<template>
  <h1 v-bind:class="classObject" @click="activate">Hello</h1>
</template>

<script>
export default {
  data() {
    return {
      classObject: {
        active: false,
        'text-danger': false,
      },
    };
  },
  methods: {
    activate() {
      this.classObject.active = true;
      this.classObject['text-danger'] = true;
    },
  },
};
</script>

<style scoped>
.active {
  text-decoration: underline;
}
.textDanger {
  color: red;
}
</style>
