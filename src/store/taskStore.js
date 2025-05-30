import { defineStore } from 'pinia'
import taskService from '../services/taskService'

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

    // Get tasks for current user
    userTasks: (state) => (userId) => state.tasks.filter((task) => task.userId === userId),
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
        const newTask = await taskService.addTask(task)
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

    async completeTask(id) {
      this.loading = true
      this.error = null

      try {
        const updatedTask = await taskService.completeTask(id)

        // Update the task in the local state
        const index = this.tasks.findIndex((t) => t.id === id)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }

        return updatedTask
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

    // Helper function to clear all error messages
    clearErrors() {
      this.error = null
    },
  },
})
