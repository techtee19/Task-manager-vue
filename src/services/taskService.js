import axios from 'axios'
import { Title } from 'chart.js'

const API_URL = 'http://localhost:3000'

export default {
  async getTasks() {
    return axios.get(`${API_URL}/tasks`).then((response) => response.data)
  },

  //   Add tasks
  async addTasks(task) {
    const newTask = {
      title: task.title,
      description: task.description,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    return axios.post(`${API_URL}/tasks`, newTask).then((response) => response.data)
  },

  //   Mark tasks as completed

  async completeTask(id) {
    const res = await axios.get(`${API_URL}/tasks/${id}`)
    const task = res.data

    // update task
    const updatedTask = {
      ...task,
      completed: true,
      completedAt: new Date().toISOString(),
    }

    return axios.put(`${API_URL}/tasks/${id}`, updatedTask).then((response) => response.data)
  },

  //  Delete tasks
  async deleteTask(id) {
    return axios.delete(`${API_URL}/tasks/${id}`).then((response) => response.data)
  },
}
