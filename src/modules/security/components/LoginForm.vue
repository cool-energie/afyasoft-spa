<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Form from '@/helpers/Form.ts'
import { useAuthStore } from '@/entities/auth/api/AuthStore.ts'
import router from '@/router'

const authStore = useAuthStore()
const login = ref('')
const password = ref('')
const rememberMe = ref(false)
const validationRules = [Form.validationRules.required]
const loading = ref(false)
const form = useTemplateRef('form')

const showError = ref(false)
const errorMessage = ref('')

async function processLogin() {
  console.log('form')
  console.log(form.value)
  if (form.value.validate()) {
    loading.value = true
    try {
      await authStore.login(login.value, password.value, rememberMe.value)
      router.push({ name: 'dashboard' })
    } catch (e) {
      errorMessage.value = e.status === 401 ? 'Identifiants incorrects' : 'Une erreur est survenue'
      showError.value = true
    }
    loading.value = false
  }
}
</script>

<template>
  <v-form ref="form">
    <v-text-field
      label="Identifiant"
      v-model="login"
      :rules="validationRules"
      :disabled="loading"
    />
    <v-text-field
      label="Mot de passe"
      type="password"
      v-model="password"
      :rules="validationRules"
      :disabled="loading"
    />
    <v-checkbox v-model="rememberMe" label="Se souvenir de moi" :disabled="loading" />
    <v-btn block color="primary" @click="processLogin" :loading="loading">Connection</v-btn>
    <v-alert v-if="showError" color="error" icon="$error" class="mt-3">{{ errorMessage }}</v-alert>
  </v-form>
</template>

<style scoped></style>
