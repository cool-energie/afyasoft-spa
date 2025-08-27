import { defineStore } from 'pinia'
import { ref } from 'vue'
import roleApi from '@/entities/user/api/RoleApi.ts'
import Role from '@/entities/user/models/Role.ts'

export const useRoleStore = defineStore("roleStore", () => {
  const rolesList = ref([])

  async function fetchRoles() {
    const { data } = await roleApi.getAll()
    rolesList.value = data.map((r) => new Role(r));
  }

  return {
    rolesList,
    fetchRoles,
  }
})
