import { defineStore } from 'pinia'
import taskService from '@/services/taskService'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalTasks: (state) => state.tasks.length,

    // Get tasks by priority
    highPriorityTasks: (state) => state.tasks.filter((task) => task.priority === 'high'),
    mediumPriorityTasks: (state) => state.tasks.filter((task) => task.priority === 'medium'),
    lowPriorityTasks: (state) => state.tasks.filter((task) => task.priority === 'low'),

    // Get tasks by user
    tasksByUser: (state) => (userId) => state.tasks.filter((task) => task.userId === userId),

    // Get recent tasks (5 most recent)
    recentTasks: (state) => {
      return [...state.tasks]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
    },
  },

  actions: {
    async fetchTasks(userId = null) {
      this.loading = true
      this.error = null

      try {
        let tasks = await taskService.getTasks()

        // Filter by userId if provided
        if (userId) {
          tasks = tasks.filter((task) => task.userId === userId)
        }

        this.tasks = tasks
      } catch (error) {
        this.error = 'Failed to fetch tasks: ' + error.message
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async addTask(task) {
      this.loading = true
      this.error = null

      try {
        const newTask = await taskService.addTask({
          ...task,
          userId: task.userId || 1, // Default to user 1 if not specified
          priority: task.priority || 'medium', // Default priority
          createdAt: new Date().toISOString(),
        })

        this.tasks.push(newTask)
        return newTask
      } catch (error) {
        this.error = 'Failed to add task: ' + error.message
        console.error(error)
        return null
      } finally {
        this.loading = false
      }
    },

    async updateTask(id, updatedData) {
      this.loading = true
      this.error = null

      try {
        const updatedTask = await taskService.updateTask(id, updatedData)

        // Update the task in the local state
        const index = this.tasks.findIndex((t) => t.id === id)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }

        return updatedTask
      } catch (error) {
        this.error = 'Failed to update task: ' + error.message
        console.error(error)
        return null
      } finally {
        this.loading = false
      }
    },

    async completeTask(id) {
      this.loading = true
      this.error = null

      try {
        const completedTask = await taskService.completeTask(id)

        // Update the task in the local state
        const index = this.tasks.findIndex((t) => t.id === id)
        if (index !== -1) {
          this.tasks[index] = completedTask
        }

        return completedTask
      } catch (error) {
        this.error = 'Failed to complete task: ' + error.message
        console.error(error)
        return null
      } finally {
        this.loading = false
      }
    },

    async deleteTask(id) {
      this.loading = true
      this.error = null

      try {
        await taskService.deleteTask(id)

        // Remove the task from the local state
        this.tasks = this.tasks.filter((t) => t.id !== id)
        return true
      } catch (error) {
        this.error = 'Failed to delete task: ' + error.message
        console.error(error)
        return false
      } finally {
        this.loading = false
      }
    },

    // Filter tasks by completion status
    filterByStatus(status) {
      if (status === 'completed') {
        return this.completedTasks
      } else if (status === 'pending') {
        return this.pendingTasks
      } else {
        return this.tasks
      }
    },

    // Filter tasks by priority
    filterByPriority(priority) {
      return this.tasks.filter((task) => task.priority === priority)
    },

    // Sort tasks by different criteria
    sortTasks(criteria) {
      const sortedTasks = [...this.tasks]

      switch (criteria) {
        case 'dateAsc':
          return sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        case 'dateDesc':
          return sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        case 'priority':
          const priorityOrder = { high: 1, medium: 2, low: 3 }
          return sortedTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
        default:
          return sortedTasks
      }
    },

    // Clear all errors
    clearErrors() {
      this.error = null
    },
  },
})
