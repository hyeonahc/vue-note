import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

const App = {
  data() {
    return {
      title: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (!this.title.trim()) {
        this.title = '';
        return;
      }
      this.todos.push({
        title: this.title,
        id: nanoid(),
      });
      this.title = '';
    },
    deleteTodo(todoToDelete) {
      const index = this.todos.findIndex(todo => todo.id === todoToDelete.id);
      this.todos.splice(index, 1);
    },
  },
};

const app = Vue.createApp(App);
app.mount('#app');
