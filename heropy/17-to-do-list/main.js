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
    // 메서드로 todo.title을 업데이트할때
    // updateTitle(todo, event) {
    //   todo.title = event;
    // },
  },
};

const TodoItem = {
  template: /* HTML */ `
    <li>
      {{ todo.title }}
      <template v-if="editMode">
        <input
          :value="todo.title"
          @input="inputTitle"
          @keydown.enter="editTodo(todo)"
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
    inputTitle(event) {
      this.$emit('update-title', event.target.value);
    },
    editTodo(todo) {
      todo.title = this.newTitle;
      this.offEditMode();
    },
    deleteTodo() {},
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.mount('#app');
