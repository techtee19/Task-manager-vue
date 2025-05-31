<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" app color="primary" dark>
      <v-app-bar-title>
        <router-link to="/dashboard" class="text-decoration-none text-white">
          Task Manager
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/dashboard" text>
        <template v-slot:prepend>
          <v-icon>mdi-view-dashboard</v-icon>
        </template>
        Dashboard
      </v-btn>

      <v-btn to="/tasks" text>
        <template v-slot:prepend>
          <v-icon>mdi-format-list-checks</v-icon>
        </template>
        Tasks
      </v-btn>

      <v-btn to="/history" text>
        <template v-slot:prepend>
          <v-icon>mdi-history</v-icon>
        </template>
        History
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="32">
              <v-img
                :src="user?.avatar || 'https://cdn.vuetifyjs.com/images/john.jpg'"
                alt="User"
              ></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="handleLogout">
            <template v-slot:prepend>
              <v-icon>mdi-logout</v-icon>
            </template>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'App',
  computed: {
    ...mapState(useAuthStore, ['isAuthenticated', 'user']),
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/')
    },
  },
  mounted() {
    // Initialize auth state from localStorage
    const authStore = useAuthStore()
    authStore.checkAuth()
  },
}
</script>

<style scoped></style>
