<template>
  <div>
    <v-app-bar color="white" app elevation="1" v-if="!isAuthenticated">
      <v-container class="d-flex align-center">
        <router-link to="/" class="text-decoration-none d-flex align-center">
          <v-icon color="primary" size="32" class="mr-2">mdi-check-circle</v-icon>
          <span class="text-h5 font-weight-medium text-black">Zen Tasks</span>
        </router-link>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-sm-flex">
          <v-btn variant="text" class="text-none mx-2" href="#features">Features</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#pricing">Pricing</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#about">About</v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <v-app-bar-nav-icon 
          class="d-flex d-sm-none" 
          @click="mobileMenuOpen = !mobileMenuOpen"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>        <!-- Login/Signup Buttons (Desktop) -->
        <div class="d-none d-sm-flex">
          <v-btn variant="text" class="text-none mr-2" to="/login">Sign In</v-btn>
          <v-btn color="black" variant="outlined" class="text-none" to="/register">Get Started</v-btn>
        </div>
      </v-container>
    </v-app-bar>
      <!-- Mobile Menu -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      temporary
      location="right"
      class="mobile-menu"
      v-if="!isAuthenticated"
    >
      <v-list>
        <v-list-item href="#features">
          <v-list-item-title>Features</v-list-item-title>
        </v-list-item>
        <v-list-item href="#pricing">
          <v-list-item-title>Pricing</v-list-item-title>
        </v-list-item>
        <v-list-item href="#about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/login">
          <v-list-item-title>Sign In</v-list-item-title>
        </v-list-item>
        <v-list-item to="/register">
          <v-list-item-title>Get Started</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {},
}
</script>

<style scoped>
/* Mobile menu specific styles */
.mobile-menu {
  z-index: 1000;
}

@media (max-width: 600px) {
  .v-app-bar {
    height: 56px !important;
  }
  
  .text-h5 {
    font-size: 1.25rem !important;
  }
}
</style>
