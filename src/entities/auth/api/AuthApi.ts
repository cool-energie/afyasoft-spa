import axios from 'axios'

const endpoints = {
  login: 'auth/login',
  logout: 'auth/logout',
}

export default {
  async login(username, password, rememberMe) {
    return await axios.post(endpoints.login, {username, password, rememberMe})
  },

  async logout() {
    return await axios.post(endpoints.logout, {})
  }
}
