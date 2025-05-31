<template>
  <v-navigation-drawer permanent color="white" border width="260">
    <!-- App Logo -->
    <div class="d-flex align-center px-4 py-4">
      <v-icon color="primary" size="32" class="mr-2">mdi-check-circle</v-icon>
      <span class="text-h5 font-weight-medium">TaskFlow</span>
    </div>

    <v-divider></v-divider>

    <!-- Navigation Items -->
    <v-list nav density="compact">
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :to="item.to"
        :active="item.to === $route.path"
        :prepend-icon="item.icon"
        :title="item.title"
        class="my-1"
        rounded="lg"
      >
      </v-list-item>
    </v-list>

    <v-spacer></v-spacer>

    <!-- Add New Task Button -->
    <div class="px-4 py-4">
      <v-btn color="black" block prepend-icon="mdi-plus" class="text-none" to="/tasks/new">
        New Task
      </v-btn>
    </div>

    <!-- User Profile -->
    <v-list class="mt-auto">
      <v-list-item class="px-4" lines="two" @click="showUserMenu = !showUserMenu">
        <template v-slot:prepend>
          <v-avatar size="40" color="grey-lighten-1">
            <v-img
              :src="user?.avatar || 'https://cdn.vuetifyjs.com/images/john.jpg'"
              alt="User"
            ></v-img>
          </v-avatar>
        </template>
        <v-list-item-title>{{ user?.name || 'John Doe' }}</v-list-item-title>
        <v-list-item-subtitle>{{ user?.email || 'john@example.com' }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-icon>mdi-chevron-down</v-icon>
        </template>
      </v-list-item>
    </v-list>

    <!-- User Menu -->
    <v-menu v-model="showUserMenu" :close-on-content-click="false" location="top end" offset="10">
      <v-card min-width="200">
        <v-list>
          <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-logout" title="Logout" @click="handleLogout"></v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'AppSidebar',
  data() {
    return {
      showUserMenu: false,
      navItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
        { title: 'Tasks', icon: 'mdi-format-list-checks', to: '/tasks' },
        { title: 'Analytics', icon: 'mdi-chart-line', to: '/analytics' },
        { title: 'Calendar', icon: 'mdi-calendar', to: '/calendar' },
        { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
      ],
    }
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/')
      this.showUserMenu = false
    },
  },
}
</script>

<style scoped>
.v-list-item--active {
  background-color: #f1f5f9;
  color: rgb(var(--v-theme-primary));
}

.v-list-item--active .v-icon {
  color: rgb(var(--v-theme-primary));
}
</style>
