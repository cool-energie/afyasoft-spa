<script setup lang="ts">
  import { useAuthStore } from '@/entities/auth/api/AuthStore.ts'
  import router from '@/router'

  const authStore = useAuthStore();

  async function logout() {
    await authStore.logout();
    router.push({ name: 'login' });
  }

</script>

<template>
dashboard
  <v-btn @click="logout">Logout</v-btn>

</template>

<style scoped>

</style>
