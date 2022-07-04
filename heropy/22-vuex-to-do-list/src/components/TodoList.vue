<template>
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :title="todo.title" />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  created() {
    this.readTodos();
  },
  methods: {
    // 목록 조회
    // actions에 있는 readTodos 메서드 실행
    async readTodos() {
      this.$store.dispatch('readTodos');
    },
  },
};
</script>

<style scoped></style>
