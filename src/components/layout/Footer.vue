<template>
  <v-footer class="bg-grey-darken-4 text-white py-12">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" class="mb-6">
          <div class="d-flex align-center mb-4">
            <v-icon color="primary" size="24" class="mr-2"> mdi-check-circle </v-icon>
            <span class="text-h6 font-weight-bold">TaskFlow</span>
          </div>
          <p class="text-grey-lighten-1">
            The ultimate task management solution for modern teams and individuals.
          </p>
        </v-col>

        <v-col cols="12" md="3" class="mb-6">
          <h3 class="text-h6 font-weight-bold mb-4">Product</h3>
          <div class="d-flex flex-column">
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link"
              >Features</a
            >
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">Pricing</a>
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link"
              >Security</a
            >
          </div>
        </v-col>

        <v-col cols="12" md="3" class="mb-6">
          <h3 class="text-h6 font-weight-bold mb-4">Company</h3>
          <div class="d-flex flex-column">
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">About</a>
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">Blog</a>
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">Careers</a>
          </div>
        </v-col>

        <v-col cols="12" md="3" class="mb-6">
          <h3 class="text-h6 font-weight-bold mb-4">Support</h3>
          <div class="d-flex flex-column">
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link"
              >Help Center</a
            >
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">Contact</a>
            <a href="#" class="text-grey-lighten-1 text-decoration-none mb-2 hover-link">Status</a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8 border-grey-darken-2" />

      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-grey-lighten-1 mb-0">© 2024 TaskFlow. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'AppFooter',
  }
</script>

<style scoped>
  .hover-link:hover {
    color: white !important;
    transition: color 0.3s ease;
  }
</style>
