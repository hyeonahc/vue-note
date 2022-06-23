import { nanoid } from 'https://cdn.skypack.dev/nanoid';

const App = {
  template: /* HTML */ `
    <input v-model="title" @keydown.enter="addTodo" />
    <ul>
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @update-title="todo.title = $event"
      ></todo-item>
    </ul>
  `,
  data() {
    return {
      title: '',
      todos: [
        { title: 'ABC', id: nanoid() },
        { title: 'XYZ', id: nanoid() },
      ],
    };
  },
  methods: {
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
  },
};

const TodoItem = {
  template: /* HTML */ `
    <li>
      <template v-if="!editMode">
        <span>{{ todo.title }}</span>
        <button @click="onEditMode">수정</button>
        <button @click="deleteTodo">삭제</button>
      </template>
      <template v-else>
        <input
          :value="title"
          @input="title = $event.target.value"
          @keydown.enter="offEditMode(), updateTitle()"
        />
        <button @click="offEditMode(), updateTitle()">확인</button>
      </template>
    </li>
  `,
  props: {
    todo: Object,
  },
  data() {
    return {
      title: '',
      editMode: false,
    };
  },
  methods: {
    onEditMode() {
      this.editMode = true;
      this.title = this.todo.title;
    },
    offEditMode() {
      this.editMode = false;
    },
    updateTitle() {
      this.$emit('update-title', this.title);
    },
    deleteTodo() {},
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.mount('#app');
