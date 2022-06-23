import { nanoid } from 'https://cdn.skypack.dev/nanoid';
import Sortable from 'https://cdn.skypack.dev/sortablejs';

const App = {
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

const TodoItem = {
  template: /* HTML */ `
    <li>
      <div className="handle">::</div>
      <template v-if="!editMode">
        <span class="title">{{ todo.title }}</span>
        <the-button color="orange" @click.stop="onEditMode">수정</the-button>
        <the-button color="danger" @click="deleteTodo">삭제</the-button>
      </template>
      <template v-else>
        <div @click.stop>
          <input
            ref="inputTitle"
            :value="title"
            @input="title = $event.target.value"
            @keydown.enter="offEditMode(), updateTitle()"
            @keydown.esc="offEditMode"
          />
          <the-button color="primary" @click="offEditMode(), updateTitle()">
            확인
          </the-button>
          <the-button @click="offEditMode">취소</the-button>
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
      window.addEventListener('click', this.offEditMode);
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

const TheButton = {
  template: /* HTML */ `
    <button class="btn" :style="style"><slot></slot></button>
  `,
  props: {
    color: {
      type: String,
    },
  },
  computed: {
    style() {
      switch (this.color) {
        case 'danger':
          return {
            backgroundColor: 'red',
            color: '#fff',
          };
        case 'primary':
          return {
            backgroundColor: 'royalblue',
            color: '#fff',
          };
        default:
          return {
            backgroundColor: this.color,
          };
      }
    },
  },
};

const app = Vue.createApp(App);
app.component('todo-item', TodoItem);
app.component('the-button', TheButton);
app.mount('#app');
