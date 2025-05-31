<template>
  <v-app>
    <!-- Sidebar (only shown when authenticated) -->
    <Sidebar v-if="isAuthenticated" />

    <!-- Main Content Area -->
    <v-main :class="{ 'ml-sidebar': isAuthenticated }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import Sidebar from '@/components/layout/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated', 'user']),
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
