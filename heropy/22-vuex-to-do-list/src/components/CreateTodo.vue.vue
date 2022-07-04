<template>
  <input type="text" :value="title" @input="title = $event.target.value" />
  <button @click="createTodo">Create</button>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    async createTodo() {
      // 빈문자일때 Todo를 만들지 않도록 하는 로직
      if (!this.title.trim()) return;
      this.$store.dispatch('createTodo', this.title);
    },
  },
};
</script>

<style scoped></style>
