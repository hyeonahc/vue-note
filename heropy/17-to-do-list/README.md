# code explanation

```JavaScript
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
      todos: [],
    };
  },
  watch: {
    todos: {
      handler(newValue) {
        this.saveTodos();
      },
      // todos는 참조형 데이터인 배열이기 때문에 깊게 관찰하기 위해 deep: true라는 옵션을 추가해주었다
      deep: true,
    },
  },
  created() {
    // created(): 컴포넌트가 생성된 직후에 실행 (데이터에 접근 가능)
    this.fetchTodos();
  },
  methods: {
    // created 라이프사이클에 해당 로직을 메서드를 거치지 않고 넣으면 어떤 역할을 하는지 한눈에 알아보기가 쉽지 않다 이를 방지 하기 위해 fetchTodos라는 메서드를 만들어 해당 로직을 넣고 created 라이프사잌르에 메서드를 호출함으로서 해당로직이 어떤역할을 하는지 메서드이름에 명시가 되어 있기 때문에 역할을 한눈에 알아보기가 쉬워진다
    fetchTodos() {
      // localStorage.setItem으로 저장된 데이터를 불러오기
      // 저장된 데이터를 불러올때는 JSON 형태의 데이터를 객체로 바꿔주는 JSON.parse를 사용해준다
      // 로컬저장소에서 값을 받지 못할경우(false값을 받아온 경우) 빈배열을 todos에 할당해 에러가 발생하지 않도록 한다
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    saveTodos() {
      // localStorage.setItem(저장할 데이터의 이름 (key), 저장할 데이터(value))
      // 이때 localStroage에 저장할 데이터는 객체(참조형 데이터)가 아닌 문자로 전달해주어야한다
      // 그래서 전달할 데이터를 JSON.stringify를 사용해 객체에서 JSON 형태로 바꿔준다
      localStorage.setItem('todos', JSON.stringify(newValue));
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

```
