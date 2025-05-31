<template>
  <div class="d-flex justify-space-between align-center mb-6">
    <div>
      <h1 class="text-h4 font-weight-bold text-grey-darken-4">Welcome back, {{ user?.name }}</h1>
      <p class="text-subtitle-1 text-grey-darken-1">
        Here's what's happening with your tasks today.
      </p>
    </div>

    <v-btn color="primary" prepend-icon="mdi-plus" @click="$router.push('/tasks/new')">
      New Task
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
