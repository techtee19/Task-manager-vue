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
        <LoginForm
          @login="handleLogin"
          @signup="handleSignup"
          :loading="loading"
          :error="error"
          :success-message="successMessage"
          :initial-mode="mode"
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
import LoginForm from '@/components/auth/LoginForm.vue'
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  props: {
    mode: {
      type: String,
      default: 'login',
    },
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f8fafc;
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .v-col {
    padding: 16px !important;
  }

  .mb-8 {
    margin-bottom: 1rem !important;
  }

  .mt-6 {
    margin-top: 1rem !important;
  }
}
</style>
