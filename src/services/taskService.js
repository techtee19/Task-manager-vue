import axios from 'axios'

// Use JSON Server URL or adjust for your backend
const API_URL = 'http://localhost:3000'

const taskService = {
  async getTasks() {
    try {
      const response = await axios.get(`${API_URL}/tasks`)
      return response.data
    } catch (error) {
      console.error('API Error - getTasks:', error)
      throw error
    }
  },

  async getTaskById(id) {
    try {
      const response = await axios.get(`${API_URL}/tasks/${id}`)
      return response.data
    } catch (error) {
      console.error('API Error - getTaskById:', error)
      throw error
    }
  },

  async addTask(task) {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task)
      return response.data
    } catch (error) {
      console.error('API Error - addTask:', error)
      throw error
    }
  },

  async updateTask(id, taskData) {
    try {
      // First get the existing task to merge data properly
      let existingTask
      try {
        const response = await axios.get(`${API_URL}/tasks/${id}`)
        existingTask = response.data
      } catch (e) {
        // If task doesn't exist, create a new task object
        existingTask = { id }
      }

      // Merge updates with existing data
      const updatedTask = {
        ...existingTask,
        ...taskData,
      }

      // Make the update request
      const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask)
      return response.data
    } catch (error) {
      console.error('API Error - updateTask:', error)
      throw error
    }
  },

  async deleteTask(id) {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`)
      return true
    } catch (error) {
      console.error('API Error - deleteTask:', error)
      throw error
    }
  },
}

export default taskService
