<!-- 4. LifeCycle 훅 -->
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
  // code inside of created hook can access data
  // 데이터에 접근하는 훅
  created() {
    console.log('Created');
  },
  beforeMount() {
    console.log('Before Mount');
  },
  // code inside of mounted hook can access DOM(HTML)
  // HTML에 접근하는 훅
  mounted() {
    console.log('Mounted');
  },
};
</script>
