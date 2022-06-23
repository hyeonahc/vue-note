import { nanoid } from 'https://cdn.skypack.dev/nanoid';

const App = {
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
    // 메서드로 todo.title을 업데이트할때
    // updateTitle(todo, event) {
    //   todo.title = event;
    // },
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
          :value="todo.title"
          @input="inputTitle"
          @keydown.enter="offEditMode"
        />
        <button @click="offEditMode">확인</button>
      </template>
    </li>
  `,
  props: {
    todo: Object,
  },
  data() {
    return {
      editMode: false,
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
    deleteTodo() {},
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.mount('#app');
