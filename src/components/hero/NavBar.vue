<template>
  <div>
    <v-app-bar color="white" app elevation="1" v-if="!isAuthenticated">
      <v-container class="d-flex align-center">
        <router-link to="/" class="text-decoration-none d-flex align-center">
          <v-icon color="primary" size="32" class="mr-2">mdi-check-circle</v-icon>
          <span class="text-h5 font-weight-medium text-black">Zen Tasks</span>
        </router-link>

        <v-spacer></v-spacer>

        <div class="d-none d-sm-flex">
          <v-btn variant="text" class="text-none mx-2" href="#features">Features</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#pricing">Pricing</v-btn>
          <v-btn variant="text" class="text-none mx-2" href="#about">About</v-btn>
        </div>

        <v-spacer></v-spacer>

        <div>
          <v-btn variant="text" class="text-none mr-2" to="/login">Sign In</v-btn>
          <v-btn color="black" variant="outlined" class="text-none" to="/login">Get Started</v-btn>
        </div>
      </v-container>
    </v-app-bar>
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
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
