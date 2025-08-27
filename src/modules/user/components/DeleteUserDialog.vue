<script setup lang="ts">
import ModelDialog from '@/components/ui/ModelDialog.vue'
import User from '@/entities/user/models/User.ts'
import { ref } from 'vue'
import { useUserStore } from '@/entities/user/store/UserStore.ts'

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
  user: {
    type: User,
    required: true,
  },
})

const userStore = useUserStore()
const emit = defineEmits(['finished'])
const loading = ref(false)

async function deleteUser() {
  loading.value = true
  await userStore.deleteUser(props.user.id)
  loading.value = false
  emit("finished")
}
</script>

<template>
  <model-dialog
    :model-value="dialog"
    title="Supprimer cet utilisateur"
    @hide="$emit('update:modelValue', false)"
    :loading="loading"
  >
    Voulez-vous vraiment supprimer l'utilisateur {{ user.username }}

    <template #footer>
      <v-btn
        @click="$emit('update:modelValue', false)"
        color="primary"
        variant="outlined"
        text
        :disabled="loading"
      >
        <v-icon>mdi-cancel</v-icon>
        Annuler
      </v-btn>
      <v-btn @click="deleteUser" color="error" variant="outlined" text :disabled="loading">
        <v-icon>mdi-delete</v-icon>
        Supprimer
      </v-btn>
    </template>
  </model-dialog>
</template>

<style scoped></style>
