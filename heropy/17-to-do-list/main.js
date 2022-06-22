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
        id: new Date().getUTCMilliseconds(),
      });
      console.log(this.todos);
      this.title = '';
    },
  },
};

const app = Vue.createApp(App);
app.mount('#app');
