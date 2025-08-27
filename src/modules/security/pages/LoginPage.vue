<script setup lang="ts">
import LoginForm from '@/modules/security/components/LoginForm.vue'
</script>

<template>
  <div class="container">
    <v-card>
      <v-card-title class="text-center">
        <img src="@/assets/images/logo.png" class="logo" />
      </v-card-title>
      <v-card-text>
        <login-form />
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
  @layer modules {
    .container {
      display: flex !important;
      height: 100vh;
      justify-content: center;
      align-items: center;

      .v-card {
        flex-basis: 30%;

        .logo {
          width: 50%;
        }
      }
    }
  }
</style>
