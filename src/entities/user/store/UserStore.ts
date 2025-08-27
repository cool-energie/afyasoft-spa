import { defineStore } from 'pinia'
import User from '@/entities/user/models/User.ts'
import { ref } from 'vue'
import userApi from '@/entities/user/api/UserApi.ts'

export const useUserStore = defineStore("userStore", () => {
  const userList: Array<User> = ref([])

  async function getPage(options) {
    const { data } = await userApi.getPage(options)
    return data
  }

  async function save(user: User) {
    return await userApi.save(user)
  }

  async function deleteUser(id: string) {
    return await userApi.deleteUser(id)
  }

  async function changePassword(id: string, newPassword: string) {
    await userApi.changePassword(id, newPassword)
  }

  return {
    userList,
    getPage,
    save,
    deleteUser,
    changePassword,
  }
})
