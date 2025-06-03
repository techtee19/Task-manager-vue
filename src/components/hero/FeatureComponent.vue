<template>
  <div id="features" class="features-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center mb-12">
          <h2 class="text-h2 font-weight-bold mb-4">Everything you need to stay organized</h2>
          <p class="text-h6 text-grey-darken-1">
            Powerful features designed to help you manage tasks efficiently and boost your
            productivity.
          </p>
        </v-col>
      </v-row>

      <!-- Feature Cards -->
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-view-dashboard-outline</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Intuitive Dashboard</h3>
            <p class="text-body-1">
              Get a clear overview of all your tasks, priorities, and progress at a glance.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-check-circle-outline</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Task Organization</h3>
            <p class="text-body-1">
              Categorize, prioritize, and schedule your tasks with an easy-to-use interface.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-chart-line</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Productivity Analytics</h3>
            <p class="text-body-1">
              Track your productivity trends and identify patterns to improve your workflow.
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Additional Features -->
      <v-row class="mt-8">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-bell-outline</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Smart Reminders</h3>
            <p class="text-body-1">
              Never miss a deadline with customizable notifications and reminders.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-account-group-outline</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Team Collaboration</h3>
            <p class="text-body-1">
              Share tasks and projects with team members for seamless collaboration.
            </p>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <v-card elevation="0" class="feature-card pa-6 h-100 rounded-lg">
            <v-icon size="48" color="primary" class="mb-4">mdi-cellphone-link</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Cross-Platform</h3>
            <p class="text-body-1">
              Access your tasks from anywhere with our mobile and desktop applications.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'FeatureComponent',
}
</script>

<style scoped>
.features-section {
  background-color: #fff;
}

.feature-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
  }

  .py-16 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .mb-12 {
    margin-bottom: 1.5rem !important;
  }

  .pa-6 {
    padding: 1rem !important;
  }

  .mt-8 {
    margin-top: 1rem !important;
  }

  .feature-card {
    margin-bottom: 1rem;
  }

  .text-h5 {
    font-size: 1.25rem !important;
  }
}

/* Tablet adjustments */
@media (min-width: 601px) and (max-width: 960px) {
  .text-h2 {
    font-size: 2.5rem !important;
  }

  .py-16 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .mb-12 {
    margin-bottom: 2rem !important;
  }
}
</style>
