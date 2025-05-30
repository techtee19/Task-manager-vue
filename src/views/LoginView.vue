<template>
  <v-container fluid class="login-page">
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <!-- Logo -->
        <div class="text-center mb-8">
          <router-link to="/" class="text-decoration-none">
            <div class="d-flex align-center justify-center">
              <v-icon color="primary" size="32" class="mr-2"> mdi-check-circle </v-icon>
              <span class="text-h5 font-weight-bold text-grey-darken-4"> ZenTasks </span>
            </div>
          </router-link>
        </div>

        <!-- Login Card -->
        <logi-in-form
          @login="handleLogin"
          @signup="handleSignup"
          :loading="loading"
          :error="error"
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
import { useAuthStore } from '@/store/authStore'
import LogiInForm from '@/components/auth/logiInForm.vue'

export default {
  name: 'LoginPage',
  components: {
    LogiInForm,
  },
  data() {
    return {
      error: null,
    }
  },
  computed: {
    ...mapState(useAuthStore, ['loading', 'isAuthenticated']),
  },

  methods: {
    ...mapActions(useAuthStore, ['login']),
    async handleLogin(credentials) {
      try {
        const success = await this.login(credentials.username, credentials.password)

        // redirect to dashboard on successful login
        if (success) {
          this.$router.push('/dashboard')
        }
      } catch (error) {
        this.error = error.message || 'Login failed. please try again.'
      }
    },

    async handleSignup(credentials) {
      await this.handleLogin({
        username: credentials.username || credentials.email,
        password: credentials.password,
      })
    },
  },
  mounted() {
    const authStore = useAuthStore()
    authStore.checkAuth()

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
