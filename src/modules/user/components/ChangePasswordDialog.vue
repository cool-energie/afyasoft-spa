<script setup lang="ts">
import ModelDialog from '@/components/ui/ModelDialog.vue'
import { ref, useTemplateRef } from 'vue'
import Form from '@/helpers/Form.ts'
import { useUserStore } from '@/entities/user/store/UserStore.ts'

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

const userStore = useUserStore()
const form = useTemplateRef('form')
const emit = defineEmits(['finished'])
const password = ref('')
const loading = ref(false)

async function changePassword() {
  if (form.value.validate()) {
    loading.value = true
    await userStore.changePassword(props.userId, password.value)
    loading.value = false
    emit('finished')
  }
}
</script>

<template>
  <model-dialog
    :model-value="dialog"
    title="Changer le mot de passe"
    :loading="loading"
    @hide="$emit('update:modelValue', false)"
  >
    <v-form ref="form">
      <v-text-field
        label="Entrer le nouveau mot de passe"
        v-model="password"
        :rules="[Form.validationRules.required]"
      />
    </v-form>
    <template #footer>
      <v-btn text color="secondary" @click="$emit('update:modelValue', false)" :loading="loading">
        <v-icon>mdi-close</v-icon>
        Annuler
      </v-btn>
      <v-btn text color="primary" @click="changePassword" :disabled="loading">
        <v-icon>mdi-content-save-outline</v-icon>
        Enregistrer
      </v-btn>
    </template>
  </model-dialog>
</template>

<style scoped></style>
