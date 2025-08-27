import { defineStore } from 'pinia'
import authApi from '@/entities/auth/api/AuthApi.ts'
import _ from 'lodash'
import User from '@/entities/user/models/User.ts'
import { removeSecurityContext, setSecurityContext } from '@/helpers/Security.ts'

export const useAuthStore = defineStore('authStore', () => {
  async function login(username, password, rememberMe) {
    try {
      const {data} = await authApi.login(username, password, rememberMe)
      const user = new User(data.user)
      console.log("user", user)
      const accessToken = data.accessToken
      setSecurityContext(user, accessToken)
    } catch (error) {
      console.error(error)
      return
    }
  }

  async function logout() {
    await authApi.logout()
    removeSecurityContext()
  }

  return {
    login,
    logout,
  }
})
