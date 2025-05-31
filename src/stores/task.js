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
  },

  actions: {
    async fetchTasks(userId = null) {
      this.loading = true
      this.error = null

      try {
        console.log('Fetching tasks for user:', userId)
        const tasks = await taskService.getTasks()

        // Filter by userId if provided
        this.tasks = userId ? tasks.filter((task) => task.userId === userId) : tasks

        console.log('Fetched tasks:', this.tasks)
        return this.tasks
      } catch (error) {
        console.error('Error fetching tasks:', error)
        this.error = error.message || 'Failed to fetch tasks'
        return []
      } finally {
        this.loading = false
      }
    },

    async addTask(task) {
      this.loading = true
      this.error = null

      try {
        console.log('Adding task in store:', task)

        // Ensure task has all required properties
        const newTask = {
          title: task.title,
          description: task.description || '',
          priority: task.priority || 'medium',
          category: task.category || 'Work',
          completed: false,
          userId: task.userId,
          createdAt: new Date().toISOString(),
          dueDate: task.dueDate || null,
        }

        // Call the service to add the task
        const createdTask = await taskService.addTask(newTask)
        console.log('Task created in API:', createdTask)

        // Add the new task to the local state
        this.tasks.push(createdTask)

        return createdTask
      } catch (error) {
        console.error('Error adding task:', error)
        this.error = error.message || 'Failed to add task'
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateTask(id, taskData) {
      this.loading = true
      this.error = null

      try {
        // Call the service to update the task
        const updatedTask = await taskService.updateTask(id, taskData)

        // Update the task in the local state
        const index = this.tasks.findIndex((t) => t.id === id)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }

        return updatedTask
      } catch (error) {
        console.error('Error updating task:', error)
        this.error = error.message || 'Failed to update task'
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteTask(id) {
      this.loading = true
      this.error = null

      try {
        // Call the service to delete the task
        await taskService.deleteTask(id)

        // Remove the task from the local state
        this.tasks = this.tasks.filter((t) => t.id !== id)

        return true
      } catch (error) {
        console.error('Error deleting task:', error)
        this.error = error.message || 'Failed to delete task'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Add or modify the completeTask action in your task store
    async completeTask(id) {
      this.loading = true
      this.error = null

      try {
        // Update the task with completed status
        const updatedTask = await this.updateTask(id, {
          completed: true,
          completedAt: new Date().toISOString(),
        })

        return updatedTask
      } catch (error) {
        console.error('Error completing task:', error)
        this.error = error.message || 'Failed to complete task'
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
