<template>
  <v-container fluid class="login-page">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <!-- Logo -->
        <div class="text-center mb-8">
          <router-link to="/" class="text-decoration-none">
            <div class="d-flex align-center justify-center">
              <v-icon color="primary" size="32" class="mr-2">mdi-check-circle</v-icon>
              <span class="text-h5 font-weight-bold text-grey-darken-4">ZenTasks</span>
            </div>
          </router-link>
        </div>

        <!-- Login Card -->
        <logi-in-form
          @login="handleLogin"
          @signup="handleSignup"
          :loading="loading"
          :error="error"
          :success-message="successMessage"
        />

        <!-- Back to Home -->
        <div class="text-center mt-6">
          <router-link to="/" class="text-decoration-none text-grey-darken-1">
            ← Back to home
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import LogiInForm from '@/components/auth/logiInForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LogiInForm,
  },
  data() {
    return {
      error: null,
      successMessage: null,
    }
  },
  computed: {
    ...mapState(useAuthStore, ['loading', 'isAuthenticated']),
  },
  methods: {
    ...mapActions(useAuthStore, ['login', 'signup']),

    async handleLogin(credentials) {
      this.error = null
      this.successMessage = null

      try {
        // Use the login action from auth store
        const success = await this.login(credentials.email, credentials.password)

        if (success) {
          // Redirect to dashboard on successful login
          this.$router.push('/dashboard')
        } else {
          const authStore = useAuthStore()
          this.error = authStore.error || 'Login failed. Please try again.'
        }
      } catch (error) {
        this.error = error.message || 'Login failed. Please try again.'
      }
    },

    async handleSignup(credentials) {
      this.error = null
      this.successMessage = null

      // Verify password match
      if (credentials.password !== credentials.confirmPassword) {
        this.error = 'Passwords do not match'
        return
      }

      try {
        const userData = {
          name: credentials.name,
          email: credentials.email,
          username: credentials.email.split('@')[0], // Use email prefix as username
          password: credentials.password,
        }

        const success = await this.signup(userData)

        if (success) {
          this.successMessage = 'Account created successfully! Please sign in.'
          // Switch to login tab after successful signup
          this.$nextTick(() => {
            if (this.$refs.loginForm) {
              this.$refs.loginForm.switchTab('login')
            }
          })
        } else {
          const authStore = useAuthStore()
          this.error = authStore.error || 'Signup failed. Please try again.'
        }
      } catch (error) {
        this.error = error.message || 'Signup failed. Please try again.'
      }
    },
  },
  mounted() {
    // Check if user is already authenticated
    const authStore = useAuthStore()
    authStore.checkAuth()

    // Redirect to dashboard if already logged in
    if (this.isAuthenticated) {
      this.$router.push('/dashboard')
    }
  },
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(135deg, #ebf8ff 0%, #ffffff 50%, #f3e8ff 100%);
  min-height: 100vh;
}
</style>
