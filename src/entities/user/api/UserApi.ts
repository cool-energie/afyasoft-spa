import axios from 'axios'
import { preparePageOptions, stringifyClean } from '@/helpers/Utils.ts'
import type User from '@/entities/user/models/User.ts'

const endpoints = {
  getPage: 'users/page',
  save: 'users/save',
  deleteUser: 'users/delete',
  changePassword: 'users/change-password',
}

export default {
  async getPage(options) {
    return await axios.get(endpoints.getPage, { params: preparePageOptions(options) })
  },

  async save(user: User) {
    return await axios.post(endpoints.save, user)
  },

  async deleteUser(id: string) {
    return await axios.delete(endpoints.deleteUser, { params: { id } })
  },

  async changePassword(id: string, newPassword: string) {
    return await axios.patch(endpoints.changePassword, {  id, newPassword })
  }
}
