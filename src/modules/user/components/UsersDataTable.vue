<script setup lang="ts">
import DataTable from '@/components/ui/DataTable.vue'
import { useUserStore } from '@/entities/user/store/UserStore.ts'
import User from '@/entities/user/models/User.ts'
import EditUserDialog from '@/modules/user/components/EditUserDialog.vue'
import { inject, onMounted, reactive, ref } from 'vue'
import { useRoleStore } from '@/entities/user/store/RoleStore.ts'
import DeleteUserDialog from '@/modules/user/components/DeleteUserDialog.vue'
import ChangePasswordDialog from '@/modules/user/components/ChangePasswordDialog.vue'

const showSuccess = inject("showSuccess")
const userStore = useUserStore()
const roleStore = useRoleStore()
const headers = [
  {
    title: 'ID',
    align: 'start',
    key: 'id',
  },
  {
    title: "Nom d' utilisateur",
    key: 'username',
  },
  {
    title: 'Roles',
    key: 'roles',
  },
  {
    title: 'Actions',
    key: 'actions',
  },
]
const tableKey = ref(0)
let currentUser = reactive(new User({}))
const dialogs = reactive({
  edit: false,
  delete: false,
  changePassword: false,
})
const formatRoles = (roles) => roles.map((role) => role.displayname).join(', ')

function showEditUser(user: User) {
  currentUser = user
  dialogs.edit = true
}

function showCreateUser() {
  currentUser = new User({})
  dialogs.edit = true
}

function showChangePasswordDialog(user: User) {
  currentUser = user
  dialogs.changePassword = true
}

function handleSaveEvent() {
  dialogs.edit = false
  tableKey.value++
  showSuccess("Enregistrement éffectuée avec succès")
}

function showDeleteUser(user: User) {
  currentUser = user
  dialogs.delete = true
}

function handleDeletedEvent() {
  dialogs.delete = false
  tableKey.value++
  showSuccess("Suppression éffectuée avec succès")
}

function handleChangePassword() {
  dialogs.changePassword = false
  showSuccess("Mot de pass modifié avec succès")
}

onMounted(async () => {
  await roleStore.fetchRoles()
})
</script>

<template>
  <data-table :headers="headers" :fetch-data="userStore.getPage" :model="User" :key="tableKey">
    <template #top>
      <div class="text-right">
        <v-btn color="primary" @click="showCreateUser">
          <v-icon>mdi-plus</v-icon>
          Ajouter
        </v-btn>
      </div>
    </template>
    <template #[`item.roles`]="{ item }">
      {{ formatRoles(item.roles) }}
    </template>
    <template #[`item.actions`]="{ item }">
      <div class="d-flex ga-4">
        <v-btn color="primary" @click="showEditUser(item)" icon variant="outlined">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="error" @click="showDeleteUser(item)" icon variant="outlined">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn color="Secondary" @click="showChangePasswordDialog(item)" icon variant="outlined">
          <v-icon>mdi-account-lock</v-icon>
        </v-btn>
      </div>
    </template>
  </data-table>
  <edit-user-dialog
    :roles-list="roleStore.rolesList"
    :user="currentUser"
    v-model="dialogs.edit"
    @saved="handleSaveEvent"
  />
  <delete-user-dialog v-model="dialogs.delete" :user="currentUser" @finished="handleDeletedEvent" />
  <change-password-dialog
    v-model="dialogs.changePassword"
    :user-id="currentUser.id"
    :dialog="dialogs.edit"
    @finished="handleChangePassword"
  />
</template>

<style scoped></style>
