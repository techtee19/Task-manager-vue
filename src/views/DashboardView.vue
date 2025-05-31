<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="text-h4"> Welcome, {{ user?.name || 'User' }}! </v-card-title>
          <v-card-subtitle> Here's an overview of your tasks </v-card-subtitle>
        </v-card>
      </v-col>

      <!-- Task Summary Cards -->
      <v-col cols="12" md="4">
        <v-card class="mb-4" color="primary" dark>
          <v-card-text class="text-center py-6">
            <div class="text-h3 mb-2">{{ totalTasks }}</div>
            <div class="text-subtitle-1">Total Tasks</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mb-4" color="success" dark>
          <v-card-text class="text-center py-6">
            <div class="text-h3 mb-2">{{ completedTasks.length }}</div>
            <div class="text-subtitle-1">Completed Tasks</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mb-4" color="warning" dark>
          <v-card-text class="text-center py-6">
            <div class="text-h3 mb-2">{{ pendingTasks.length }}</div>
            <div class="text-subtitle-1">Pending Tasks</div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Recent Tasks -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <span>Recent Tasks</span>
            <v-btn color="primary" variant="text" to="/tasks">
              View All
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-list v-if="recentTasks.length > 0">
            <v-list-item
              v-for="task in recentTasks"
              :key="task.id"
              :title="task.title"
              :subtitle="task.description"
            >
              <template v-slot:prepend>
                <v-icon :color="task.completed ? 'success' : 'warning'">
                  {{ task.completed ? 'mdi-check-circle' : 'mdi-clock-outline' }}
                </v-icon>
              </template>

              <template v-slot:append>
                <v-chip size="small" :color="getPriorityColor(task.priority)" text-color="white">
                  {{ task.priority }}
                </v-chip>
              </template>
            </v-list-item>
          </v-list>

          <v-card-text v-else class="text-center py-8">
            <v-icon size="48" color="grey-lighten-1" class="mb-4"
              >mdi-clipboard-text-outline</v-icon
            >
            <p class="text-body-1 text-grey-darken-1">No tasks found</p>
            <v-btn color="primary" class="mt-4" to="/tasks"> Create Task </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/task'

export default {
  name: 'DashboardView',
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

    // Get 5 most recent tasks
    recentTasks() {
      return [...this.tasks]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
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

<style lang="scss" scoped></style>
