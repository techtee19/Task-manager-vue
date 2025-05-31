<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\views\TasksView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="text-h4">My Tasks</v-card-title>
          <v-card-subtitle>Manage your tasks here</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            <span>Task List</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" prepend-icon="mdi-plus"> Add Task </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <p class="text-center text-body-1 my-10 text-grey-darken-1">Loading tasks...</p>
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
  name: 'TasksView',
  computed: {
    ...mapState(useAuthStore, ['user', 'isAuthenticated']),
    ...mapState(useTaskStore, ['tasks', 'loading', 'error']),
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
