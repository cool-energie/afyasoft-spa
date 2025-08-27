<script setup lang="ts">
import User from '@/entities/user/models/User.ts'
import { computed, onMounted, onUpdated, reactive, ref, useTemplateRef } from 'vue'
import type Role from '@/entities/user/models/Role.ts'
import _ from 'lodash'
import ModelDialog from '@/components/ui/ModelDialog.vue'
import Form from '@/helpers/Form.ts'
import { useUserStore } from '@/entities/user/store/UserStore.ts'

const userStore = useUserStore()
const emit = defineEmits(['saved'])

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
  user: {
    type: User,
    required: true,
  },
  rolesList: {
    type: Array<Role>,
    required: true,
  },
})

const local = reactive({
  user: new User({password:''}),
})

const loading = ref(false)
const dialogTitlePrefix = computed(() => (props.user.id === undefined ? 'Creer' : 'Modifier'))
const formComp = useTemplateRef('form')
const formValidationRules = [Form.validationRules.required]

async function save() {
  loading.value = true
  if (formComp.value.validate()) {
    await userStore.save(local.user)
    emit('saved')
  }
  loading.value = false
}

onUpdated(() => {
  local.user = _.cloneDeep(props.user)
  console.log('local.user',local.user)
})
</script>

<template>
  <model-dialog
    :model-value="dialog"
    :title="`${dialogTitlePrefix} un utilisateur`"
    @hide="$emit('update:modelValue', false)"
  >
    <v-form ref="form">
      <v-text-field
        label="Identifiant"
        v-model="local.user.username"
        :rules="formValidationRules"
      />
      <v-select
        label="Roles"
        multiple
        v-model="local.user.roles"
        :items="rolesList"
        item-title="displayname"
        item-value="id"
        :rules="formValidationRules"
        return-object
      ></v-select>
      <v-checkbox label="Actif" v-model="local.user.enabled" />
    </v-form>

    <template #footer>
      <v-spacer />
      <v-btn text color="secondary" @click="$emit('update:modelValue', false)" :loading="loading">
        <v-icon>mdi-close</v-icon>
        Annuler
      </v-btn>
      <v-btn text color="primary" @click="save" :loading="loading">
        <v-icon>mdi-content-save-outline</v-icon>
        Enregistrer
      </v-btn>    </template>
  </model-dialog>
</template>

<style scoped></style>
