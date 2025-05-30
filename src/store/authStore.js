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
    async login(username, password) {
      this.loading = true
      this.error = null

      try {
        // using the auth service to handle login logic
        const user = await authService.login(username, password)

        this.user = user
        this.isAuthenticated = true

        return true
      } catch (error) {
        this.error = error.message
      }
      this.loading = false
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
