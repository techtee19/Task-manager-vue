<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\views\HistoryView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="text-h4">Task History</v-card-title>
          <v-card-subtitle>Review your completed tasks</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>Completed Tasks</v-card-title>
          <v-divider></v-divider>

          <v-card-text v-if="completedTasks.length > 0">
            <v-list>
              <v-list-item
                v-for="task in completedTasks"
                :key="task.id"
                :title="task.title"
                :subtitle="`Completed on: ${formatDate(task.completedAt)}`"
              >
                <template v-slot:prepend>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-card-text v-else class="text-center py-8">
            <v-icon size="48" color="grey-lighten-1" class="mb-4">mdi-check-circle-outline</v-icon>
            <p class="text-body-1 text-grey-darken-1">No completed tasks found</p>
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
  name: 'HistoryView',
  computed: {
    ...mapState(useAuthStore, ['user', 'isAuthenticated']),
    ...mapState(useTaskStore, ['tasks', 'loading', 'error']),

    completedTasks() {
      return this.tasks
        .filter((task) => task.completed)
        .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    },
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'Unknown date'

      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
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
