export default {
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
