<template>
  <h1>{{ count }}</h1>
  <button @click="increase">
    INCREASE + 1
  </button>
</template>

<script>
export default {
  inject: ['count', 'increase']
}
</script>
