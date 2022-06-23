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
        @delete-todo="deleteTodo"
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
    deleteTodo(todoTodelete) {
      console.log(todoTodelete);
      const index = this.todos.findIndex(todo => todo.id === todoTodelete.id);
      this.todos.splice(index, 1);
    },
  },
};

const TodoItem = {
  template: /* HTML */ `
    <li>
      <template v-if="!editMode">
        <span>{{ todo.title }}</span>
        <!-- 이벤트 버블링을 막아주는 이벤트 수식어 stop 사용 -->
        <!-- 이벤트 버블링: 자식 요소를 선택했을때 부모 요소에 있는 이벤트도 모두 실행되는 현상 -->
        <button @click.stop="onEditMode">수정</button>
        <button @click="deleteTodo">삭제</button>
      </template>
      <template v-else>
        <!-- 이벤트 버블링을 막아주는 이벤트 수식어 stop 사용 -->
        <div @click.stop>
          <input
            ref="inputTitle"
            :value="title"
            @input="title = $event.target.value"
            @keydown.enter="offEditMode(), updateTitle()"
            @keydown.esc="offEditMode"
          />
          <button @click="offEditMode(), updateTitle()">확인</button>
          <button @click="offEditMode">취소</button>
        </div>
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
    async onEditMode() {
      this.editMode = true;
      this.title = this.todo.title;
      // vue문법을 사용한 이벤트가 아닌 수동으로 추가해준 이벤트 핸들러는 수동으로 삭제해주어야한다 (그렇지 않으면 이벤트가 쌓임)
      window.addEventListener('click', this.offEditMode);
      // 화면이 바뀐후 할일 지정
      await this.$nextTick();
      this.$refs.inputTitle.focus();
    },
    offEditMode() {
      this.editMode = false;
      window.removeEventListener('click', this.offEditMode);
    },
    updateTitle() {
      this.$emit('update-title', this.title);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo);
    },
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.mount('#app');
