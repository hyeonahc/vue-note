<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
    };
  },
  beforeCreate() {
    console.log('Before Create');
  },
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
};
</script>
