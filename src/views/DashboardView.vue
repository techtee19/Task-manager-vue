<template>
  <div class="dashboard-container pa-4 pa-sm-6">
    <!-- Welcome Header -->
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-2">Welcome back, {{ user?.name || 'John Doe' }}!</h1>
      <p class="text-subtitle-1 text-grey-darken-1">
        Here's what's happening with your tasks today.
      </p>
    </div>

    <!-- Stats Cards -->
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="0" class="rounded-lg">
          <v-card-text>
            <div class="d-flex justify-space-between align-center mb-2">
              <div class="text-grey-darken-1">Total Tasks</div>
              <v-icon color="grey-lighten-1" size="20">mdi-dots-horizontal</v-icon>
            </div>
            <div class="text-h3 font-weight-bold">{{ totalTasks }}</div>
            <div class="text-caption text-grey-darken-1">
              +{{ newTasksThisWeek }} from yesterday
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="0" class="rounded-lg">
          <v-card-text>
            <div class="d-flex justify-space-between align-center mb-2">
              <div class="text-grey-darken-1">Completed</div>
              <v-icon color="success" size="20">mdi-check-circle</v-icon>
            </div>
            <div class="text-h3 font-weight-bold text-success">{{ completedTasks.length }}</div>
            <div class="text-caption text-grey-darken-1">
              {{ Math.round((completedTasks.length / totalTasks) * 100) || 0 }}% completion rate
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="0" class="rounded-lg">
          <v-card-text>
            <div class="d-flex justify-space-between align-center mb-2">
              <div class="text-grey-darken-1">Pending</div>
              <v-icon color="warning" size="20">mdi-clock-outline</v-icon>
            </div>
            <div class="text-h3 font-weight-bold text-warning">{{ pendingTasks.length }}</div>
            <div class="text-caption text-grey-darken-1">Due this week</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="0" class="rounded-lg">
          <v-card-text>
            <div class="d-flex justify-space-between align-center mb-2">
              <div class="text-grey-darken-1">Productivity</div>
              <v-icon color="primary" size="20">mdi-trending-up</v-icon>
            </div>
            <div class="text-h3 font-weight-bold text-primary">{{ productivityScore }}%</div>
            <div class="text-caption text-grey-darken-1">+5% from last month</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Charts Row -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <v-card-title class="pb-0">
            <div class="text-h6 font-weight-medium">Tasks by Category</div>
            <div class="text-caption text-grey-darken-1">
              Distribution of tasks across different categories
            </div>
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="height: 280px">
            <doughnut-chart :chartData="tasksByCategoryData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <v-card-title class="pb-0">
            <div class="text-h6 font-weight-medium">Weekly Activity</div>
            <div class="text-caption text-grey-darken-1">Tasks completed vs created this week</div>
          </v-card-title>
          <v-card-text class="d-flex justify-center align-center" style="height: 280px">
            <bar-chart :chartData="weeklyActivityData" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Rows -->
    <v-row class="mt-4">
      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <div class="text-h6 font-weight-medium">Upcoming Tasks</div>
              <div class="text-caption text-grey-darken-1">
                Your next {{ Math.min(2, pendingTasks.length) }} pending tasks
              </div>
            </div>
            <v-btn color="primary" variant="text" to="/tasks" density="comfortable">
              View All
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-list v-if="pendingTasks.length > 0" class="pa-0">
            <v-list-item
              v-for="task in pendingTasks.slice(0, 2)"
              :key="task.id"
              :title="task.title"
              :subtitle="task.description || 'No description'"
              class="py-4"
              lines="two"
            >
              <template v-slot:prepend>
                <v-icon :color="getPriorityColor(task.priority)" size="small" class="mr-2">
                  {{ getPriorityIcon(task.priority) }}
                </v-icon>
              </template>

              <template v-slot:append>
                <div class="d-flex flex-column align-end">
                  <v-chip
                    :color="getPriorityColor(task.priority)"
                    text-color="white"
                    size="small"
                    class="mb-1"
                    variant="flat"
                  >
                    {{ task.priority }}
                  </v-chip>
                  <span class="text-caption text-grey">{{
                    formatDate(task.dueDate || task.createdAt)
                  }}</span>
                </div>
              </template>
            </v-list-item>
          </v-list>

          <v-card-text v-else class="text-center py-6">
            <v-icon size="48" color="grey-lighten-1" class="mb-4"
              >mdi-clipboard-text-outline</v-icon
            >
            <p class="text-body-1 text-grey-darken-1">No pending tasks</p>
            <v-btn color="primary" class="mt-4" to="/tasks/new">Create Task</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="0" class="rounded-lg">
          <v-card-title class="pb-0">
            <div class="text-h6 font-weight-medium">Productivity Trend</div>
            <div class="text-caption text-grey-darken-1">
              Your productivity over the last 6 months
            </div>
          </v-card-title>
          <v-card-text>
            <div style="height: 220px">
              <line-chart :chartData="productivityTrendData" />
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="d-flex align-center justify-space-between">
              <div class="text-subtitle-1">Current</div>
              <div class="text-subtitle-1 font-weight-bold text-primary">
                {{ productivityScore }}%
              </div>
            </div>

            <v-progress-linear
              :model-value="productivityScore"
              color="primary"
              height="10"
              rounded
              class="mt-2"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/task'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'

export default {
  name: 'DashboardView',
  components: {
    DoughnutChart,
    BarChart,
    LineChart,
  },
  computed: {
    ...mapState(useAuthStore, ['user', 'isAuthenticated']),
    ...mapState(useTaskStore, ['tasks', 'loading', 'error']),

    completedTasks() {
      return this.tasks.filter((task) => task.completed)
    },

    pendingTasks() {
      return this.tasks.filter((task) => !task.completed)
    },

    totalTasks() {
      return this.tasks.length
    },

    productivityScore() {
      if (this.totalTasks === 0) return 0
      return Math.round((this.completedTasks.length / this.totalTasks) * 100)
    },

    newTasksThisWeek() {
      // In a real app, you'd calculate this from task creation dates
      return 2
    },

    // Chart data
    tasksByCategoryData() {
      return {
        labels: ['Work', 'Personal', 'Urgent', 'Learning'],
        datasets: [
          {
            backgroundColor: ['#4285F4', '#34A853', '#EA4335', '#FBBC05'],
            data: [40, 30, 15, 15],
            borderWidth: 0,
          },
        ],
      }
    },

    weeklyActivityData() {
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Created',
            backgroundColor: '#4285F4',
            data: [6, 8, 5, 7, 9, 4, 3],
            borderRadius: 4,
          },
          {
            label: 'Completed',
            backgroundColor: '#34A853',
            data: [4, 6, 8, 5, 9, 3, 2],
            borderRadius: 4,
          },
        ],
      }
    },

    productivityTrendData() {
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Productivity',
            backgroundColor: 'rgba(66, 133, 244, 0.2)',
            borderColor: '#4285F4',
            data: [65, 75, 70, 85, 90, 88],
            tension: 0.3,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#FFFFFF',
            pointBorderColor: '#4285F4',
            pointBorderWidth: 2,
          },
        ],
      }
    },
  },

  methods: {
    getPriorityColor(priority) {
      switch (priority) {
        case 'high':
          return 'error'
        case 'medium':
          return 'warning'
        case 'low':
          return 'success'
        default:
          return 'grey'
      }
    },

    getPriorityIcon(priority) {
      switch (priority) {
        case 'high':
          return 'mdi-flag'
        case 'medium':
          return 'mdi-flag'
        case 'low':
          return 'mdi-flag'
        default:
          return 'mdi-flag-outline'
      }
    },

    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    },
  },

  mounted() {
    // Check if user is authenticated
    const authStore = useAuthStore()
    authStore.checkAuth()

    // Redirect to login if not authenticated
    if (!authStore.isAuthenticated) {
      this.$router.push('/login')
      return
    }

    // Fetch tasks when component mounts
    const taskStore = useTaskStore()
    taskStore.fetchTasks(this.user?.id)
  },
}
</script>

<style scoped>
.dashboard-container {
  max-width: 100%;
}

/* Make text responsive on small screens */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }
  
  .text-h3 {
    font-size: 1.75rem !important;
  }
  
  .text-subtitle-1 {
    font-size: 0.875rem !important;
  }
}

/* Add some spacing on mobile devices */
@media (max-width: 960px) {
  .v-col {
    padding-bottom: 12px;
  }
}
</style>
