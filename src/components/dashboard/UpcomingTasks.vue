<template>
  <v-card>
    <v-card-title class="d-flex align-center">
      <v-icon color="primary" class="mr-2">mdi-calendar-clock</v-icon>
      Upcoming Tasks
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="task in upcomingTasks" :key="task.id" :to="`/tasks/${task.id}`">
          <template v-slot:prepend>
            <v-icon :color="getPriorityColor(task.priority)"> mdi-flag </v-icon>
          </template>

          <v-list-item-title>{{ task.title }}</v-list-item-title>
          <v-list-item-subtitle> Due: {{ formatDate(task.dueDate) }} </v-list-item-subtitle>

          <template v-slot:append>
            <v-chip :color="getStatusColor(task.status)" size="small" class="ml-2">
              {{ task.status }}
            </v-chip>
          </template>
        </v-list-item>

        <v-list-item v-if="upcomingTasks.length === 0">
          <v-list-item-title class="text-center text-grey"> No upcoming tasks </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'UpcomingTasks',
  props: {
    upcomingTasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'MMM dd, yyyy')
    },
    getPriorityColor(priority) {
      const colors = {
        high: 'error',
        medium: 'warning',
        low: 'success',
      }
      return colors[priority] || 'grey'
    },
    getStatusColor(status) {
      const colors = {
        'in-progress': 'info',
        'not-started': 'warning',
        completed: 'success',
      }
      return colors[status] || 'grey'
    },
  },
}
</script>
