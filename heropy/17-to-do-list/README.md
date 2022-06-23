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
        <the-button color="orange" @click.stop="onEditMode">수정</the-button>
        <!-- color라는 props로 dagner라는 값을 the-button 컴포넌트에 전달해주었다 -->
        <the-button color="danger" @click="deleteTodo">삭제</the-button>
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

const TheButton = {
  template: /* HTML */ `
    <!-- :style="{ backgroundColor: backgroundColor }" -->
    <!-- :style의 객체 데이터로 backgroundColor의 값으로 계산된 데이터 backgroundColor가 지정되었다 -->
    <!-- 객체안에서 key와 value의 값이 같은 경우 한번만 사용한다 -->
    <!-- <button class="btn" :style="{ backgroundColor }"><slot></slot></button> -->
    <!-- :style="{ key: value }"로 style은 객체를 가지기 때문에 계산된 값 style()도 switch문을 최종값이 리턴된 객체값이다 -->
    <button class="btn" :style="style"><slot></slot></button>
  `,
  // 상위 컴포넌트 todoItem에서 color라는 props를 전달하므로 props옵션에 등록하고 type을 지정해준다
  props: {
    color: {
      type: String,
    },
  },
  computed: {
    // template button 요소에 전달해줄 계산된값 style은 props로 받아온 color의 조건을 검색해 알맞은 객체를 리턴해준다
    // 리턴된 객체에는 style 속성이 정의되어져 있고 button 요소의 스타일로 들어간다
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

```
