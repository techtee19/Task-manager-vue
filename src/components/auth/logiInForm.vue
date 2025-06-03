<template>
  <v-card elevation="8" class="pa-4">
    <v-card-title class="text-center">
      <div>
        <h2 class="text-h4 font-weight-bold mb-2">Welcome</h2>
        <p class="text-body-1 text-grey-darken-1">Sign in to your account or create a new one</p>
      </div>
    </v-card-title>

    <v-card-text>
      <!-- Success message alert -->
      <v-alert v-if="successMessage" type="success" class="mb-4" density="compact">
        {{ successMessage }}
      </v-alert>

      <!-- Error message alert -->
      <v-alert v-if="error" type="error" class="mb-4" density="compact">
        {{ error }}
      </v-alert>

      <v-tabs v-model="activeTab" centered>
        <v-tab value="login">Sign In</v-tab>
        <v-tab value="signup">Sign Up</v-tab>
      </v-tabs>

      <v-tabs-window v-model="activeTab" class="mt-6">
        <!-- Login Tab -->
        <v-tabs-window-item value="login">
          <v-form @submit.prevent="submitLogin" ref="loginForm">
            <v-text-field
              v-model="loginForm.email"
              label="Email"
              type="email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              :rules="emailRules"
              required
              class="mb-4"
            />

            <v-text-field
              v-model="loginForm.password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
              variant="outlined"
              :rules="passwordRules"
              required
              class="mb-4"
            />

            <v-btn
              type="submit"
              color="primary"
              block
              size="large"
              :loading="loading"
              :disabled="loading"
              class="mb-4"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </v-btn>
          </v-form>
        </v-tabs-window-item>

        <!-- Signup Tab -->
        <v-tabs-window-item value="signup">
          <v-form @submit.prevent="submitSignup" ref="signupForm">
            <v-text-field
              v-model="signupForm.name"
              label="Full Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              :rules="nameRules"
              required
              class="mb-4"
            />

            <v-text-field
              v-model="signupForm.email"
              label="Email"
              type="email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              :rules="emailRules"
              required
              class="mb-4"
            />

            <v-text-field
              v-model="signupForm.password"
              label="Password"
              :type="showPasswordSignup ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPasswordSignup ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPasswordSignup = !showPasswordSignup"
              variant="outlined"
              :rules="passwordRules"
              required
              class="mb-4"
            />

            <v-text-field
              v-model="signupForm.confirmPassword"
              label="Confirm Password"
              :type="showConfirmPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-check"
              :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              variant="outlined"
              :rules="confirmPasswordRules"
              required
              class="mb-4"
            />

            <v-btn
              type="submit"
              color="primary"
              block
              size="large"
              :loading="loading"
              :disabled="loading"
              class="mb-4"
            >
              {{ loading ? 'Creating account...' : 'Create Account' }}
            </v-btn>
          </v-form>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'LoginCard',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: null,
    },
    successMessage: {
      type: String,
      default: null,
    },
  },
  emits: ['login', 'signup'],
  data() {
    return {
      activeTab: 'login',
      showPassword: false,
      showPasswordSignup: false,
      showConfirmPassword: false,
      loginForm: {
        email: '',
        password: '',
      },
      signupForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be at least 6 characters',
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length >= 2 || 'Name must be at least 2 characters',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'Please confirm your password',
        (v) => v === this.signupForm.password || 'Passwords do not match',
      ],
    }
  },
  methods: {
    async submitLogin() {
      const { valid } = await this.$refs.loginForm.validate()
      if (!valid) return

      this.$emit('login', this.loginForm)
    },
    async submitSignup() {
      const { valid } = await this.$refs.signupForm.validate()
      if (!valid) return

      // Check if passwords match before submitting
      if (this.signupForm.password !== this.signupForm.confirmPassword) {
        return
      }

      this.$emit('signup', this.signupForm)
    },
    // Add method to switch tabs programmatically
    switchTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>

<style scoped>
.v-card {
  width: 100%;
}

/* Mobile-specific styles */
@media (max-width: 600px) {
  .v-card {
    padding: 1rem !important;
  }

  .text-h4 {
    font-size: 1.5rem !important;
  }

  .text-body-1 {
    font-size: 0.875rem !important;
  }

  .v-text-field {
    margin-bottom: 1rem !important;
  }

  .v-tabs .v-tab {
    min-width: auto !important;
    padding: 0 12px !important;
  }
}
</style>
