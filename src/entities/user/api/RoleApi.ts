import axios from 'axios'

const endpoints = {
  getAll: "roles/all",
}

export default {
  async getAll() {
    return await axios.get(endpoints.getAll);
  }
}
