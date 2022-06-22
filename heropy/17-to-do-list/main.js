import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

const App = {
  data() {
    return {
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
  },
};

const TodoItem = {
  template: /* HTML */ `
    <li>
      {{ todo.title }}
      <template v-if="editMode">
        <input
          v-model="newTitle"
          @keydown.enter="editTodo(todo)"
          ref="newTitleInput"
        />
        <button @click="editTodo(todo)">확인</button>
      </template>
      <template v-else>
        <button @click="onEditMode">수정</button>
        <button @click="deleteTodo">삭제</button>
      </template>
    </li>
  `,
  props: {
    todos: Array,
    todo: Object,
  },
  data() {
    return {
      editMode: false,
      newTitle: '',
    };
  },
  methods: {
    onEditMode() {
      this.editMode = true;
    },
    offEditMode() {
      this.editMode = false;
    },
    editTodo(todo) {
      todo.title = this.newTitle;
      this.offEditMode();
    },
    deleteTodo() {},
    mounted() {
      console.log(this.$refs);
      this.$refs.newTitleInput.focus();
    },
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.mount('#app');
