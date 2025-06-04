<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\views\TasksView.vue -->
<template>
  <div class="tasks-container pa-4 pa-sm-6">
    <!-- Page Header with New Task Button -->
    <div class="d-flex justify-space-between align-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold mb-1">Tasks</h1>
        <p class="text-subtitle-1 text-grey-darken-1">Manage and organize your tasks efficiently</p>
      </div>
      <v-btn color="black" prepend-icon="mdi-plus" to="/tasks/new" class="text-none" size="large">
        New Task
      </v-btn>
    </div>

    <!-- Search & Filter Bar -->
    <v-card elevation="0" class="mb-6 rounded-lg pa-1">
      <div class="d-flex flex-wrap gap-3">
        <v-text-field
          v-model="searchQuery"
          prepend-inner-icon="mdi-magnify"
          placeholder="Search tasks..."
          hide-details
          density="compact"
          variant="solo-filled"
          bg-color="grey-lighten-4"
          class="flex-grow-1"
        ></v-text-field>

        <v-select
          v-model="selectedCategory"
          :items="categoryOptions"
          label="All Categories"
          hide-details
          density="compact"
          variant="solo-filled"
          bg-color="grey-lighten-4"
          min-width="180"
          class="flex-grow-0"
        ></v-select>

        <v-select
          v-model="selectedStatus"
          :items="statusOptions"
          label="All Tasks"
          hide-details
          density="compact"
          variant="solo-filled"
          bg-color="grey-lighten-4"
          min-width="180"
          class="flex-grow-0"
        ></v-select>
      </div>
    </v-card>

    <!-- Task Stats Summary Cards -->
    <v-row class="mb-6">
      <v-col cols="6" sm="3">
        <v-card elevation="0" class="pa-4 rounded-lg text-center border">
          <div class="text-h3 font-weight-bold">{{ tasks.length }}</div>
          <div class="text-subtitle-1 text-grey-darken-1">Total Tasks</div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card elevation="0" class="pa-4 rounded-lg text-center border">
          <div class="text-h3 font-weight-bold text-success">{{ completedTasks.length }}</div>
          <div class="text-subtitle-1 text-grey-darken-1">Completed</div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card elevation="0" class="pa-4 rounded-lg text-center border">
          <div class="text-h3 font-weight-bold text-warning">{{ pendingTasks.length }}</div>
          <div class="text-subtitle-1 text-grey-darken-1">Pending</div>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card elevation="0" class="pa-4 rounded-lg text-center border">
          <div class="text-h3 font-weight-bold text-error">{{ overdueTasks.length }}</div>
          <div class="text-subtitle-1 text-grey-darken-1">Overdue</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tasks List -->
    <v-card v-if="filteredTasks.length > 0" elevation="0" class="rounded-lg border">
      <v-list class="pa-0">
        <div v-for="(task, index) in filteredTasks" :key="task.id">
          <v-list-item class="py-4 px-4">
            <template v-slot:prepend>
              <v-checkbox
                v-model="task.completed"
                @change="toggleTaskCompletion(task)"
                :color="task.completed ? 'success' : 'grey'"
                hide-details
              ></v-checkbox>
            </template>

            <div
              class="d-flex flex-column"
              :class="{ 'text-decoration-line-through': task.completed }"
            >
              <div class="d-flex align-center">
                <div class="text-h6 font-weight-medium">{{ task.title }}</div>
                <v-chip v-if="isTaskOverdue(task)" color="error" size="small" class="ml-2">
                  Overdue
                </v-chip>
              </div>
              <div class="text-subtitle-2 text-grey-darken-1">{{ task.description }}</div>
            </div>

            <template v-slot:append>
              <div class="d-flex flex-column align-end">
                <div class="d-flex align-center mb-1">
                  <v-chip size="small" :color="getTaskCategoryColor(task.category)" class="mr-2">
                    {{ task.category }}
                  </v-chip>
                  <v-chip size="small" :color="getTaskPriorityColor(task.priority)">
                    {{ task.priority }}
                  </v-chip>
                </div>
                <div class="d-flex align-center">
                  <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                  <span class="text-caption">{{ formatDate(task.dueDate) }}</span>
                </div>
              </div>

              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn icon variant="text" density="compact" v-bind="props" class="ml-2">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list density="compact">
                  <v-list-item @click="editTask(task)">
                    <template v-slot:prepend>
                      <v-icon size="small">mdi-pencil</v-icon>
                    </template>
                    <v-list-item-title>Edit</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="openDeleteDialog(task)">
                    <template v-slot:prepend>
                      <v-icon size="small">mdi-delete</v-icon>
                    </template>
                    <v-list-item-title>Delete</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-list-item>

          <v-divider v-if="index < filteredTasks.length - 1"></v-divider>
        </div>
      </v-list>
    </v-card>

    <!-- Empty State -->
    <v-card v-else elevation="0" class="pa-8 rounded-lg border text-center">
      <v-icon size="48" color="grey-lighten-1" class="mb-4">mdi-clipboard-text-outline</v-icon>
      <h3 class="text-h6 font-weight-medium mb-2">No tasks found</h3>
      <p class="text-body-1 text-grey-darken-1 mb-4">
        {{
          searchQuery
            ? 'Try adjusting your search or filters'
            : 'Create your first task to get started'
        }}
      </p>
      <v-btn color="primary" to="/tasks/new" class="mt-2">Create Task</v-btn>
    </v-card>

    <!-- Dialog for deletion confirmation -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">Delete Task</v-card-title>
        <v-card-text>
          Are you sure you want to delete this task? This action cannot be undone.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" variant="text" @click="confirmDelete" :loading="deleteLoading">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/task'

export default {
  name: 'TasksView',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'All Categories',
      selectedStatus: 'All Tasks',
      statusOptions: ['All Tasks', 'Completed', 'Pending', 'Overdue'],
      categoryOptions: ['All Categories', 'Work', 'Personal', 'Learning', 'Health'],
      deleteDialog: false,
      taskToDelete: null,
      deleteLoading: false,
    }
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
    overdueTasks() {
      return this.tasks.filter((task) => this.isTaskOverdue(task))
    },
    filteredTasks() {
      let filtered = [...this.tasks]

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            (task.description && task.description.toLowerCase().includes(query)),
        )
      }

      // Apply category filter
      if (this.selectedCategory !== 'All Categories') {
        filtered = filtered.filter((task) => task.category === this.selectedCategory)
      }

      // Apply status filter
      if (this.selectedStatus === 'Completed') {
        filtered = filtered.filter((task) => task.completed)
      } else if (this.selectedStatus === 'Pending') {
        filtered = filtered.filter((task) => !task.completed)
      } else if (this.selectedStatus === 'Overdue') {
        filtered = filtered.filter((task) => this.isTaskOverdue(task))
      }

      return filtered
    },
  },
  methods: {
    ...mapActions(useTaskStore, [
      'fetchTasks',
      'addTask',
      'updateTask',
      'deleteTask',
      'completeTask',
    ]),

    getTaskPriorityColor(priority) {
      const colors = {
        high: 'error',
        medium: 'warning',
        low: 'success',
      }
      return colors[priority] || 'grey'
    },

    getTaskCategoryColor(category) {
      const colors = {
        Work: 'blue',
        Personal: 'indigo',
        Learning: 'cyan',
        Health: 'teal',
      }
      return colors[category] || 'grey'
    },

    formatDate(dateString) {
      if (!dateString) return 'No due date'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },

    isTaskOverdue(task) {
      if (!task.dueDate || task.completed) return false
      return new Date(task.dueDate) < new Date()
    },

    async toggleTaskCompletion(task) {
      try {
        if (task.completed) {
          // Task is being marked as completed
          await this.updateTask(task.id, {
            completed: true,
            completedAt: new Date().toISOString(),
          })
        } else {
          // Task is being marked as incomplete
          await this.updateTask(task.id, {
            completed: false,
            completedAt: null,
          })
        }
        console.log(`Task "${task.title}" ${task.completed ? 'completed' : 'marked as incomplete'}`)
      } catch (error) {
        console.error('Error toggling task completion:', error)
        // Revert the checkbox state on error
        task.completed = !task.completed
      }
    },

    editTask(task) {
      this.$router.push({ name: 'edit-task', params: { id: task.id } })
    },

    openDeleteDialog(task) {
      this.taskToDelete = task
      this.deleteDialog = true
    },

    async confirmDelete() {
      if (!this.taskToDelete) return

      this.deleteLoading = true
      try {
        await this.deleteTask(this.taskToDelete.id)
        // Show success message
        this.$root.$emit('show-snackbar', {
          text: `Task "${this.taskToDelete.title}" deleted successfully`,
          color: 'success',
        })
      } catch (error) {
        console.error('Error deleting task:', error)
        // Show error message
        this.$root.$emit('show-snackbar', {
          text: 'Failed to delete task',
          color: 'error',
        })
      } finally {
        this.deleteLoading = false
        this.deleteDialog = false
        this.taskToDelete = null
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
    this.fetchTasks(this.user?.id)
  },
}
</script>

<style scoped>
.tasks-container {
  max-width: 100%;
}

/* Responsive styling for mobile devices */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }

  .text-subtitle-1 {
    font-size: 0.875rem !important;
  }

  /* Adjust button size on small screens */
  .v-btn {
    padding: 0 16px !important;
  }

  /* Make the search and filter sections stack better */
  .gap-3 {
    gap: 8px !important;
  }
}

/* Add more space between filter elements on tablet */
@media (max-width: 960px) and (min-width: 601px) {
  .gap-3 {
    gap: 12px !important;
  }
}
</style>
