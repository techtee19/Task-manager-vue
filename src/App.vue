<template>
  <v-app>
    <!-- Mobile App Bar (only shown when authenticated and on small screens) -->
    <v-app-bar v-if="isAuthenticated && $vuetify.display.smAndDown" color="white" elevation="1">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-medium">
        <v-icon color="primary" size="24" class="mr-2">mdi-check-circle</v-icon>
        ZenTasks
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="showUserMenu = !showUserMenu">
        <v-avatar size="32" color="grey-lighten-1">
          <v-img
            :src="user?.avatar || 'https://cdn.vuetifyjs.com/images/john.jpg'"
            alt="User"
          ></v-img>
        </v-avatar>
      </v-btn>
      <!-- User Menu -->
      <v-menu
        v-model="showUserMenu"
        :close-on-content-click="false"
        location="bottom end"
        offset="10"
      >
        <v-card min-width="200">
          <v-list>
            <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
            <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
            <v-divider></v-divider>
            <v-list-item
              prepend-icon="mdi-logout"
              title="Logout"
              @click="handleLogout"
            ></v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <!-- Sidebar (only shown when authenticated) -->
    <Sidebar v-if="isAuthenticated" ref="sidebar" />

    <!-- Main Content Area -->
    <v-main :class="{ 'ml-sidebar': isAuthenticated && $vuetify.display.lgAndUp }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import Sidebar from '@/components/layout/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  data() {
    return {
      showUserMenu: false,
    }
  },
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated', 'user']),
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    toggleDrawer() {
      this.$refs.sidebar.drawer = !this.$refs.sidebar.drawer
    },
    async handleLogout() {
      await this.logout()
      this.$router.push('/')
      this.showUserMenu = false
    },
  },
  mounted() {
    // Initialize auth state from localStorage
    const authStore = useAuthStore()
    authStore.checkAuth()
  },
}
</script>

<style>
.ml-sidebar {
  padding-left: 260px; /* Adjust if sidebar width changes */
}

@media (max-width: 960px) {
  .ml-sidebar {
    padding-left: 0;
  }
}

/* Global styles */
body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.v-application {
  background-color: #f8fafc !important;
}
</style>
