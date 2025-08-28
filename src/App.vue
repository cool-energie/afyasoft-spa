<script setup lang="ts">
import { provide, reactive, ref } from 'vue'

let snackbar = reactive({
  visible: false,
  text: '',
  color: '',
  icon: '',
})

function showMessage(message, color, icon) {
  snackbar.visible = true
  snackbar.text = message
  snackbar.color = color
  snackbar.icon = icon
}

function showInfo(message) {
  showMessage(message, '#2196F3', 'mdi-information-slab-circle-outline')
}

function showError(message) {
  showMessage(message, 'error', 'mdi-alert-circle-outline')
}

function showSuccess(message) {
  showMessage(message, 'success', 'mdi-check-circle-outline')
}

function showWarning(message) {
  showMessage(message, '#FF9800', 'mdi-alert')
}

provide('showInfo', showInfo)
provide('showError', showError)
provide('showSuccess', showSuccess)
provide('showWarning', showWarning)
</script>

<template>
  <RouterView />
  <v-snackbar v-model="snackbar.visible" :color="snackbar.color">
    <div class="d-flex ga-2">
      <v-icon :icon="snackbar.icon" />
      <span>{{ snackbar.text }}</span>
    </div>
  </v-snackbar>
</template>

<style scoped></style>
