import { defineStore } from 'pinia'
import authService from '@/services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  }),

  actions: {
    async login(usernameOrEmail, password) {
      this.loading = true
      this.error = null

      try {
        const user = await authService.login(usernameOrEmail, password)

        this.user = user
        this.isAuthenticated = true

        return true
      } catch (error) {
        this.error = error.message
        return false
      } finally {
        this.loading = false
      }
    },

    // Add signup action
    async signup(userData) {
      this.loading = true
      this.error = null

      try {
        await authService.signup(userData)
        // Don't automatically log in, just return success
        return true
      } catch (error) {
        this.error = error.message
        return false
      } finally {
        this.loading = false
      }
    },

    logout() {
      authService.logout()
      this.user = null
      this.isAuthenticated = false
    },

    checkAuth() {
      const user = authService.getCurrentUser()
      if (user) {
        this.user = user
        this.isAuthenticated = true
      }
    },
  },
})
