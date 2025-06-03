<!-- filepath: c:\Users\LENOVO\Desktop\Task Manager\src\views\TaskFormView.vue -->
<template>
  <div class="task-form-container pa-4 pa-sm-6">
    <div class="d-flex align-center mb-6">
      <v-btn icon class="mr-4" @click="$router.push('/tasks')">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h1 class="text-h4 font-weight-bold">{{ isEditMode ? 'Edit Task' : 'New Task' }}</h1>
    </div>

    <v-card elevation="0" class="rounded-lg border">
      <v-form ref="form" v-model="valid" @submit.prevent="saveTask">
        <v-card-text>
          <!-- Task Title -->
          <v-text-field
            v-model="taskForm.title"
            label="Task Title"
            variant="outlined"
            :rules="[(v) => !!v || 'Title is required']"
            required
            class="mb-4"
          ></v-text-field>

          <!-- Task Description -->
          <v-textarea
            v-model="taskForm.description"
            label="Description"
            variant="outlined"
            rows="3"
            class="mb-4"
          ></v-textarea>

          <v-row>
            <!-- Due Date -->
            <v-col cols="12" md="6">
              <v-menu v-model="showDatePicker" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    v-model="formattedDueDate"
                    label="Due Date"
                    variant="outlined"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="props"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="taskForm.dueDate"
                  @update:model-value="showDatePicker = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <!-- Task Priority -->
            <v-col cols="12" md="6">
              <v-select
                v-model="taskForm.priority"
                :items="priorityOptions"
                label="Priority"
                variant="outlined"
                prepend-inner-icon="mdi-flag"
                :rules="[(v) => !!v || 'Priority is required']"
                required
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <!-- Task Category -->
            <v-col cols="12" md="6">
              <v-select
                v-model="taskForm.category"
                :items="categoryOptions"
                label="Category"
                variant="outlined"
                prepend-inner-icon="mdi-tag"
                :rules="[(v) => !!v || 'Category is required']"
                required
              ></v-select>
            </v-col>

            <!-- Status for edit mode -->
            <v-col cols="12" md="6" v-if="isEditMode">
              <v-switch
                v-model="taskForm.completed"
                color="success"
                label="Mark as completed"
                hide-details
              ></v-switch>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="$router.push('/tasks')" class="mr-2"> Cancel </v-btn>
          <v-btn color="primary" type="submit" :loading="loading" :disabled="!valid || loading">
            {{ isEditMode ? 'Update Task' : 'Create Task' }}
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useTaskStore } from '@/stores/task'

export default {
  name: 'TaskFormView',
  data() {
    return {
      valid: false,
      showDatePicker: false,
      taskForm: {
        title: '',
        description: '',
        dueDate: null,
        priority: 'medium',
        category: 'Work',
        completed: false,
      },
      priorityOptions: ['high', 'medium', 'low'],
      categoryOptions: ['Work', 'Personal', 'Learning', 'Health'],
    }
  },
  computed: {
    ...mapState(useAuthStore, ['user', 'isAuthenticated']),
    ...mapState(useTaskStore, ['tasks', 'loading', 'error']),

    isEditMode() {
      return !!this.$route.params.id
    },

    formattedDueDate() {
      if (!this.taskForm.dueDate) return ''
      const date = new Date(this.taskForm.dueDate)
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
  },
  methods: {
    ...mapActions(useTaskStore, ['addTask', 'updateTask', 'fetchTasks']),

    async loadTask() {
      const taskId = Number(this.$route.params.id)
      if (isNaN(taskId)) return

      const task = this.tasks.find((t) => t.id === taskId)
      if (task) {
        // Make a deep copy of the task to avoid inadvertent modifications to store
        this.taskForm = JSON.parse(JSON.stringify(task))
      } else {
        console.error('Task not found with ID:', taskId)
        this.$router.push('/tasks')
      }
    },

    async saveTask() {
      if (!this.$refs.form.validate()) return

      try {
        if (this.isEditMode) {
          // Update existing task
          const taskId = Number(this.$route.params.id)
          await this.updateTask(taskId, this.taskForm)
          console.log('Task updated successfully')
        } else {
          // Create new task
          const newTask = {
            ...this.taskForm,
            userId: this.user?.id || 1, // Fallback to 1 if user ID is missing
            completed: false,
            createdAt: new Date().toISOString(),
          }

          console.log('Submitting new task:', newTask)
          const result = await this.addTask(newTask)
          console.log('Task created successfully:', result)
        }

        // Reload tasks list and navigate back
        await this.fetchTasks(this.user?.id)
        this.$router.push('/tasks')
      } catch (error) {
        console.error('Failed to save task:', error)
        alert('There was an error saving your task. Please try again.')
      }
    },
  },
  async mounted() {
    console.log('TaskFormView mounted')
    // Check if user is authenticated
    const authStore = useAuthStore()
    authStore.checkAuth()

    // Redirect to login if not authenticated
    if (!authStore.isAuthenticated) {
      this.$router.push('/login')
      return
    }

    // Fetch tasks (needed for edit mode)
    try {
      await this.fetchTasks(this.user?.id)

      // If we're in edit mode, load the task data
      if (this.isEditMode) {
        this.loadTask()
      }
    } catch (error) {
      console.error('Error in TaskFormView mounted:', error)
    }
  },
}
</script>

<style scoped>
.task-form-container {
  max-width: 100%;
}

/* Mobile-specific styles */
@media (max-width: 600px) {
  .text-h4 {
    font-size: 1.5rem !important;
  }

  .v-card-actions {
    flex-direction: column;
    gap: 8px;
  }

  .v-card-actions .v-btn {
    width: 100%;
    margin-right: 0 !important;
  }

  .v-card-actions .v-spacer {
    display: none;
  }
}

/* Tablet adjustments */
@media (max-width: 960px) and (min-width: 601px) {
  .task-form-container {
    padding: 1.5rem !important;
  }
}
</style>
