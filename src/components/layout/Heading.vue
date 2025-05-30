<template>
  <v-app-bar app color="white" elevation="1" height="70" class="px-4">
    <v-container fluid class="d-flex align-center">
      <!-- Logo -->
      <router-link to="/" class="text-decoration-none">
        <div class="d-flex align-center">
          <v-icon color="primary" size="32" class="mr-2"> mdi-check-circle </v-icon>
          <span class="text-h5 font-weight-bold text-grey-darken-4"> TaskFlow </span>
        </div>
      </router-link>

      <v-spacer />

      <!-- Navigation -->
      <v-btn-group variant="text" class="d-none d-md-flex mr-8">
        <v-btn href="#features">Features</v-btn>
        <v-btn href="#pricing">Pricing</v-btn>
        <v-btn href="#about">About</v-btn>
      </v-btn-group>

      <!-- Auth Buttons -->
      <div class="d-flex align-center">
        <v-btn variant="text" @click="$router.push('/login')" class="mr-2"> Sign In </v-btn>
        <v-btn color="primary" @click="$router.push('/login')"> Get Started </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
