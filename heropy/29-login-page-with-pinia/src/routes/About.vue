<template>
  <h1>{{ userStore.user.email }}</h1>
  <h1>{{ userStore.user.displayName }}</h1>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'
export default {
  computed: {
    ...mapStores(useUserStore)
  }
}
</script>
