import { nanoid } from 'https://cdn.skypack.dev/nanoid';
import Sortable from 'https://cdn.skypack.dev/sortablejs';

export default {
  template: /* HTML */ `
    <input v-model="title" @keydown.enter="addTodo" />
    <ul ref="todoList">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @update-title="todo.title = $event"
        @delete-todo="deleteTodo"
      ></todo-item>
    </ul>
  `,
  data() {
    return {
      title: '',
      todos: [],
    };
  },
  watch: {
    todos: {
      handler() {
        this.saveTodos();
      },
      deep: true,
    },
  },
  created() {
    this.fetchTodos();
  },
  mounted() {
    this.initSortable();
  },
  methods: {
    fetchTodos() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    reorderTodos(oldIndex, newIndex) {
      const clone = { ...this.todos[oldIndex] };
      this.todos.splice(oldIndex, 1);
      this.todos.splice(newIndex, 0, clone);
    },
    addTodo() {
      if (!this.title.trim()) {
        return;
      }
      this.todos.push({
        title: this.title,
        id: nanoid(),
      });
      this.title = '';
    },
    deleteTodo(todoTodelete) {
      const index = this.todos.findIndex(todo => todo.id === todoTodelete.id);
      this.todos.splice(index, 1);
    },
    initSortable() {
      new Sortable(this.$refs.todoList, {
        handle: 'li .handle',
        delay: 50,
        animation: 0,
        forceFallback: true,
        onEnd: event => {
          this.reorderTodos(event.oldIndex, event.newIndex);
        },
      });
    },
  },
};
