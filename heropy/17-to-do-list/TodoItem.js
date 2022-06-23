export default {
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
