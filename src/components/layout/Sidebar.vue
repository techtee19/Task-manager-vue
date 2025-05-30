<template>
  <v-navigation-drawer permanent width="280" class="bg-white" border>
    <!-- Logo -->
    <div class="pa-4 border-b">
      <div class="d-flex align-center">
        <v-icon color="primary" size="32" class="mr-2"> mdi-check-circle </v-icon>
        <span class="text-h5 font-weight-bold text-grey-darken-4"> TaskFlow </span>
      </div>
    </div>

    <!-- Navigation -->
    <v-list nav class="pa-4">
      <v-list-item
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        :prepend-icon="item.icon"
        :title="item.name"
        rounded="lg"
        class="mb-2"
      />
    </v-list>

    <!-- Quick Actions -->
    <div class="pa-4 border-t">
      <v-btn color="primary" block prepend-icon="mdi-plus" @click="$router.push('/tasks/new')">
        New Task
      </v-btn>
    </div>

    <!-- User Menu -->
    <template #append>
      <div class="pa-4 border-t">
        <UserMenu :user="user" @logout="handleLogout" />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import UserMenu from './UserMenu.vue'

export default {
  name: 'AppSidebar',
  components: {
    UserMenu,
  },
  data() {
    return {
      navigation: [
        { name: 'Dashboard', href: '/dashboard', icon: 'mdi-view-dashboard' },
        { name: 'Tasks', href: '/tasks', icon: 'mdi-format-list-checks' },
        { name: 'Analytics', href: '/analytics', icon: 'mdi-chart-bar' },
        { name: 'Calendar', href: '/calendar', icon: 'mdi-calendar' },
        { name: 'Settings', href: '/settings', icon: 'mdi-cog' },
      ],
    }
  },
  computed: {
    user() {
      const userData = localStorage.getItem('user')
      return userData ? JSON.parse(userData) : null
    },
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('user')
      localStorage.removeItem('tasks')
      this.$router.push('/')
    },
  },
}
</script>
