import api, { API_URL } from './api'

export default {
  async getTasks(params = {}) {
    try {
      const response = await api.get('/tasks', { params })
      return response.data
    } catch (error) {
      console.error('API Error - getTasks:', error)
      throw error
    }
  },

  async getTaskById(id) {
    try {
      const response = await api.get(`/tasks/${id}`)
      return response.data
    } catch (error) {
      console.error('API Error - getTaskById:', error)
      throw error
    }
  },

  async addTask(task) {
    try {
      const response = await api.post('/tasks', task)
      return response.data
    } catch (error) {
      console.error('API Error - addTask:', error)
      throw error
    }
  },

  async updateTask(id, taskData) {
    try {
      const response = await api.put(`/tasks/${id}`, taskData)
      return response.data
    } catch (error) {
      console.error('API Error - updateTask:', error)
      throw error
    }
  },

  async deleteTask(id) {
    try {
      await api.delete(`/tasks/${id}`)
      return true
    } catch (error) {
      console.error('API Error - deleteTask:', error)
      throw error
    }
  },

  async getTaskStatistics(userId) {
    try {
      // Get all tasks for the user
      const tasks = await this.getTasks({ userId })

      // Calculate statistics
      const totalTasks = tasks.length
      const completedTasks = tasks.filter((task) => task.completed).length
      const pendingTasks = totalTasks - completedTasks

      // Get overdue tasks (due date is in the past and not completed)
      const today = new Date()
      const overdueTasks = tasks.filter((task) => {
        if (!task.dueDate || task.completed) return false
        const dueDate = new Date(task.dueDate)
        return dueDate < today
      }).length

      // Calculate completion rate
      const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

      return {
        total: totalTasks,
        completed: completedTasks,
        pending: pendingTasks,
        overdue: overdueTasks,
        completionRate: completionRate,
      }
    } catch (error) {
      console.error('API Error - getTaskStatistics:', error)
      throw error
    }
  },

  async getTasksByPriority(userId) {
    try {
      const tasks = await this.getTasks({ userId })

      // Group tasks by priority
      const result = {
        high: tasks.filter((task) => task.priority === 'high').length,
        medium: tasks.filter((task) => task.priority === 'medium').length,
        low: tasks.filter((task) => task.priority === 'low').length,
      }

      return result
    } catch (error) {
      console.error('API Error - getTasksByPriority:', error)
      throw error
    }
  },

  async getTasksCompletionByDay(userId, days = 7) {
    try {
      const tasks = await this.getTasks({ userId })

      // Get dates for the last 'days' days
      const dates = []
      const today = new Date()

      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)
        dates.push(date.toISOString().split('T')[0]) // Format as YYYY-MM-DD
      }

      // Count completed tasks per day
      const completionData = dates.map((date) => {
        const completedOnDate = tasks.filter((task) => {
          if (!task.completedAt) return false
          return task.completedAt.startsWith(date)
        }).length

        return {
          date: date,
          completed: completedOnDate,
        }
      })

      return completionData
    } catch (error) {
      console.error('API Error - getTasksCompletionByDay:', error)
      throw error
    }
  },
}
