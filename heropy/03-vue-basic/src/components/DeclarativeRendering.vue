<template>
  <h1>Declarative Rendering</h1>
  <h2 @click="increase">{{ count }}</h2>
</template>

<script>
export default {
  name: 'DeclarativeRendering',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase() {
      this.count += 1;
    },
  },
};
</script>
